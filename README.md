# Team-Lemond-Capstone

### Servers side API end points

database: mysql? mongo?

general stats: how many survey tests taken; demographcis, busniess size

GET:


`\v1\`



![Age Friendly Business Logo](https://github.com/liuyaf/Team-Lemond-Capstone/blob/development/documentation-images/image20.png)
# GoAgeFriendly.org Documentation
**Date**: 06/03/2009
**Author**: Muhammad Hariz, Davis Huynh, Liuyang Fu

### What is GoAgeFriendly.org?
Goagefriendly.org is a website dedicated to helping businesses and organizations in Seattle becoming a more age friendly entity for their customers and employees.

Features within the goagefriendly.org website include:
+ A landing page that helps the users become familiar with age friendly business.
+ Access to resources guide document that includes tips on becoming an age friendly business.
+ Two different self-assessments (customer service and employer self-assessment) that business representatives take to find out + how age friendly their business are and also provide ways to improve their businesses.

### Technology Architecture
![Technology Architecture](https://github.com/liuyaf/Team-Lemond-Capstone/blob/development/documentation-images/image18.png)
Data within the goagefriendly.org website flows through three different platforms:
+ WordPress [https://wordpress.com/]
+ A content management system for websites.
+ Vue.js [https://vuejs.org/]
+ An open-source javaScript framework for building user interfaces and single-page applications.
+ Amazon Web Services [https://aws.amazon.com/]
+ A secure cloud service platform that offers compute power, database storage, content delivery and other functionality to help businesses scale and grow. UPDATE: we are using node.js server and mongodb as the DBMS for backend.
+ **UPDATE: we are using node.js server and mongodb as the DBMS for backend.**

### WordPress
We use WordPress to store editable content within the landing page of the goagefrienly.org website. List of the web pages that can be edited through the WordPress are listed below:
+ The About page [https://goagefriendly.org/]
+ The Resources page [https://goagefriendly.org/resources]
+ The Assessment Selection page [https://goagefriendly.org/assessment-selection]
+ The Contact Us page [https://goagefriendly.org/contact-us]

Contents within the WordPress are consumed by Vue.js through the WordPress REST API. The reason why is because we have UI designs that are more doable to develop with Vue.js than building a custom theme on WordPress. Another reason is we couldn’t build assessment tests that satisfies our design specification through WordPress, and it was more doable to build them through Vue.js. 

#### How to edit pages on WordPress
##### 1. Log in to the Wordpress admin
![Log in to the Wordpress admin](https://github.com/liuyaf/Team-Lemond-Capstone/blob/development/documentation-images/image8.png)
Got to https://agefriendlysea.wpengine.com/wp-admin/ and log in using your email and password.
##### 2. Click “Pages” on the left navbar
![Click “Pages” on the left navbar](https://github.com/liuyaf/Team-Lemond-Capstone/blob/development/documentation-images/image15.png)
##### 3. Select the page that you want to edit
![Click “Pages” on the left navbar](https://github.com/liuyaf/Team-Lemond-Capstone/blob/development/documentation-images/image6.png)
##### 4. Make the necessary edit on the page
![Make the necessary edit on the page](https://github.com/liuyaf/Team-Lemond-Capstone/blob/development/documentation-images/image22.png)
##### 5. Save your changes
![Save your changes](https://github.com/liuyaf/Team-Lemond-Capstone/blob/development/documentation-images/image12.png)
Save your changes by clicking on the blue “update” button.
**NOTE: While the contents for these webpages are editable through the WordPress, the preview version of the page are not the actual representation of the web page edited, so below we provide a table that shows the name of the pages from the WordPress dashboard and the pages associated with it on the goagefriendly.org website.**

|WordPress page name|Where the edits are affected                  |
|-------------------|----------------------------------------------|
|Landing Page       |https://goagefriendly.org/                    |
|Resources          |https://goagefriendly.org/resources           |
|Assessment Test    |https://goagefriendly.org/assessment-selection|
|Contact Us         |https://goagefriendly.org/contact-us          |

### Vue.js
To create the website we use Vue.js as the javascript library to create majority of the website functionalities.

Other than using HTML, CSS, Bootstrap to create the look of the website itself, we used axios to interact with the WordPress REST API, which involved grabbing the rendered content. Rendered content are later parsed and rendered to meet the specified UI design. More documentation about the WordPress REST API can be found at https://developer.wordpress.org/rest-api/.

Examples of where we render the wordpress content can be found in any of the files under:
“Capstone Landing Page\Team-Lemond-Capstone\client\afb-website\src\views”. In those files if you look below the script tags you will see we use axios to do a get of the specific page and get its content. 

Link to all pages and it’s content: https://agefriendlysea.wpengine.com/wp-json/wp/v2/pages/.
From here you will get all the json of each page and its content following this all you need to do is parse the information which again can be found under the script tags.

In addition to rendering the pages with it’s wordpress content, Vue.js is used to make the self-assessments on the website.

Assessment contents such as the questions, the tips, and terms of agreement text, are stored within the source code in a file called **loadingQuestions.js**. Necessary changes for the assessments (fixing typos, removing or adding a question) will need to be done by editing the **loadingQuestions.js** file. 

**NOTE: We strongly recommend you to use text editor like Atom or Notepad++ to make changes as they can beautify the structure of the file better for edit purpose.**

Fixing typos will be easy as just changing the text, however if you want to add or remove a question then this will be how you do it:

#### Adding/Removing Questions:
To add or remove questions on either of the customer or employer assessment tests, scroll to either the customerTest or employerTest variable depending on where you want to add/remove questions.

Once you are at the variable go the specific section you want to make edits too and following this json format: 
```
questionID: 1,
type: "radio",
title: "______",
questionContent: {
yes: "_____",
no: "____"
}
```
Change the 1 to the corresponding number of where it is placed and it will be added.
If you are removing please update the IDs too.

Using a json formatter after this to make sure you did it correctly will be helpful.

<span style="color:red">**DISCLAIMER**</span>: When adding a new questions in between existing questions, the csv, while it will be updated with the new question, all the questions after the new one added will be shifted over to the right. For example, if you add a new question in between question 1 and 2 of a given section such as section 1. The csv will show s1q1, s1q2 s1q3, however, when new rows of data are added to the database, column , s1q3, of the rows prior to when the new section was added will actually be referring to s1q2.

Because this maybe be confusing we suggest only adding new questions at the end so keeping track of questions, however, if it is a must, make sure to keep track of the dates when new sections are added so you know what is referring to what.

#### Adding/Removing Sections:
To add or remove sections on either of the customer or employer assessment tests, scroll to either the customerTest or employerTest variable depending on where you want to add/remove questions.

Once you are there add a section by following the format from the ones currently implemented. Remember to make sure to fix the question IDs so they are in order after doing so.

Using a json formatter after this to make sure you did it correctly will be helpful.

<span style="color:red">**DISCLAIMER**</span>: When adding a new section in between existing sections, the csv, while it will be updated with the new section, all the sections after the new one added will be shifted over to the right. For example, if you add a new section in between section 1 and 2. The csv will show s1q1, s1q2… s2q1, s2q2…., s3q1, s3q2 however, when new rows of data are added to the database, columns s2q1, s2q2, of the rows prior to when the new section was added will actually be referring to s3q1, s3q2… and so on. 

Because this might be confusing, we suggest only adding new sections at the end so keeping track of questions and sections don’t become confusing, however, if it is a must, make sure to keep track of the dates when new sections are added so you know what is referring to what.

#### Adding/Removing tips:
To add or remove tips for either of the result pages of the customer or employer assessment test, scroll to either the “customerGeneralTips” variable or “employerGeneralTips” where they will be all stored in a json format. 

To add tips under a specific section such as “Marketing” simply add another block with
```
{ tipsTitle: “_____”, tipsLi: [“____”,”____”] }
```
To remove tips under a specific section, simply remove the block or text that isn’t needed anymore.

A GitHub repository containing all the source code of the goagefriendly.org website can be found at https://github.com/liuyaf/Team-Lemond-Capstone.

**After editing, please send the updated loadingQuestion.js to Illuminage and have them deploy the change.**

### Amazon Web Services
To access Amazon Web Services (AWS) console, you need to go to https://signin.aws.amazon.com/ with the email: agefriendlyseattle@illuminage.com and credential.

After logging in, you will see a dashboard. Click on top left “Services”, you should find EC2 under compute and Route53 under network. EC2 is the section where you manage existing afb servers, creating new server. Route 53 is for routing inbound traffic to specific server.

#### Creating New EC2 Instance
To create new instance, follow the instructions:
##### 1. Go to EC2 dashboard from services and click launch instance
![Step 1](https://github.com/liuyaf/Team-Lemond-Capstone/blob/development/documentation-images/image7.png)
##### 2. In ***1. Choose AMI*** Select Amazon Linux AMI 2018.03.0 (HVM), SSD Volume Type
![Step 2](https://github.com/liuyaf/Team-Lemond-Capstone/blob/development/documentation-images/image5.png)
##### 3. Use "default setting" step ***2. Choose Instance Type*** and ***3. Configure Instance***
##### 4. Click ***4. Add Storage*** and change the storage to 12 GBs
![Step 4](https://github.com/liuyaf/Team-Lemond-Capstone/blob/development/documentation-images/image19.png)
##### 5. In ***5. Add tags***, give the instance a name
![Step 5](https://github.com/liuyaf/Team-Lemond-Capstone/blob/development/documentation-images/image9.png)
##### 6. In ***6. Configure Security Group***, add the following types
![Step 6](https://github.com/liuyaf/Team-Lemond-Capstone/blob/development/documentation-images/image14.png)
##### 7. In ***7. Review***, click launch and make sure select the correct private key (it is recommended to use the same private key for all servers, for better management purpose.) The afbIlluminage.pem private key will be provided in email.
![Step 7](https://github.com/liuyaf/Team-Lemond-Capstone/blob/development/documentation-images/image16.png)

#### Create Elastic IP for new instance
##### 1. At the console, go to Elastic IPs
![Step 1](https://github.com/liuyaf/Team-Lemond-Capstone/blob/development/documentation-images/image17.png)
##### 2. Click Allocate new address, then click Allocate
##### 3. You should get a new IP not associated with any instance
##### 4. Click on new IP, actions: associate address
![Step 4](https://github.com/liuyaf/Team-Lemond-Capstone/blob/development/documentation-images/image2.png)
then select the instance you want to associate with.

#### Route Traffic to new instance using Route 53
Once you create a new instance, you need to add the ruleset in Route 53 to route traffic to it. To do that:
##### 1. You need to first copy the Public DNS address of the instance that you want to route. You can find it at ec2 dashboard
![Step 1](https://github.com/liuyaf/Team-Lemond-Capstone/blob/development/documentation-images/image21.png)
##### 2. Go to Route 53 -> hosted zones -> goagefriendly.org. You should see several rules set about the domain
![Step 2](https://github.com/liuyaf/Team-Lemond-Capstone/blob/development/documentation-images/image13.png)
##### 3. Click Create Record Set, put the sub domain name at the name, change type to CNAME and paste the public DNS name at Value
![Step 3](https://github.com/liuyaf/Team-Lemond-Capstone/blob/development/documentation-images/image4.png)

#### Access AWS EC2 instances with command line:
In order to update environment of the server/ troubleshooting server issue, you need to ssh into the EC2 instance using command line tool like: bash, masOS terminal, Windows cmd.
1. First, you need to have access to the private key mentioned above (afbIlluminage.pem), store it in a secure folder (it is recommended to put it in ~/.ssh/  folder)
2. Open the command line tool and type in `ssh -i ~/.ssh/afbIlluminage.pem ec2-user@THEPUBLICDNSADDRESS`
3. Here’s the list of the server and its public DNS:
a. Landing page (address: https://goagefriendly.org): ec2-3-15-66-213.us-east-2.compute.amazonaws.com 
b. Nodejs server (address: https://api.goagefriendly.org): ec2-3-15-111-64.us-east-2.compute.amazonaws.com
c. Dashboard server (address: https://staff.goagefriendly.org): ec2-18-218-203-136.us-east-2.compute.amazonaws.com
4. Type yes if you are prompted.
5. Then you should successfully ssh into the server
![Step 5](https://github.com/liuyaf/Team-Lemond-Capstone/blob/development/documentation-images/image11.png)

