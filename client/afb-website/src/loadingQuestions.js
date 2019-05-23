/* eslint-disable */


let TOA = {
    id: "toa",
    // name: "terms of agreement",
    title: "Assessment Terms of Agreement",
    content: [{
            title: "Terms of Agreement and Condition",
            content: "<p>The Age Friendly Business website and assessments may contain links to third-party sites that are not owned and we cannot control. We assume no responsibility for the content, privacy policies, or practices of any third part websites or services. By acknowledging that you have received this information, you are agreeing that Age Friendly Business and the City of Seattle shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any content, goods, or services available on or through this website.</p>"
        },
        {
            title: "Changes",
            content: "<p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time.</p>"
        },
        {
            title: "Information & Privacy",
            content: '<p>Your assessment score, personal information, and details about your business will not be stored. If you wish to keep your assessment score and related tips or resources, please save the material as a PDF or JPG before you leave the page. \nIf you have comments or questions about content or functionality of this website, you are welcome to e-mail <a href = "mailto: agefriendly@seattle.gov">agefriendly@seattle.gov</a>. Please include a link to the specific webpage.</p>'
        }
    ]

}

let businessInfo = {
    sectionID: 1,
    sectionTitle: "Business information",
    questions: [{
            questionID: 1,
            type: "dropdown",
            title: "What is your business type?",
            options: [{
                value: "Agriculture/Forestry/Maritime",
                label: "Agriculture/Forestry/Maritime"
            }, {
                value: "Construction",
                label: "Construction"
            }, {
                value: "Education",
                label: "Education"
            }, {
                value: "Finance/Insurance/Legal/Real Estate",
                label: "Finance/Insurance/Legal/Real Estate"
            }, {
                value: "Government/Public Sector",
                label: "Government/Public Sector"
            }, {
                value: "Health Care/Human Services",
                label: "Health Care/Human Services"
            }, {
                value: "Manufacturing",
                label: "Manufacturing"
            }, {
                value: "Nonprofit Organization",
                label: "Nonprofit Organization"
            }, {
                value: "Restaurant/Food Service/Bar",
                label: "Restaurant/Food Service/Bar"
            }, {
                value: "Retail",
                label: "Retail"
            }, {
                value: "Technology/Communications",
                label: "Technology/Communications"
            }, {
                value: "Transportation/Utilities",
                label: "Transportation/Utilities"
            }, {
                value: "Wholesale",
                label: "Wholesale"
            }, {
                value: "Other",
                label: "Other"
            }]
        },
        {
            questionID: 2,
            type: "dropdown",
            title: "How many employees does your business have?",
            options: [{
                    value: "0 employees (self-employed)",
                    label: "0 employees (self-employed)"
                },
                {
                    value: "1–9 employees",
                    label: "1–9 employees"
                }, {
                    value: "10–49 employees",
                    label: "10–49 employees"
                }, {
                    value: "50–249 employees",
                    label: "50–249 employees"
                }, {
                    value: "250–499 employees",
                    label: "250–499 employees"
                }, {
                    value: "500 or more employees",
                    label: "500 or more employees"
                }
            ]
        },
        {
            questionID: 3,
            type: "input",
            title: "What is your business's zipcode?",
        }
    ]
}
let employerTest = [businessInfo,
    {
        sectionID: 2,
        sectionTitle: "Workforce Planning",
        questions: [{
                questionID: 1,
                type: "radio",
                title: "Do you know the age profile of your workforce and what percentage of your employees is age 50+?",
                questionContent: {
                    yes: "Excellent—this is important information for both employee retention and succession planning. ",
                    no: "Experienced workers carry institutional knowledge and wisdom that is beneficial to your organization."
                }
            },
            {
                questionID: 2,
                type: "radio",
                title: "Do you have a method to get feedback about the needs and interests of mature and other workers?",
                questionContent: {
                    yes: "Great—it’s always good to know what motivates your employees.",
                    no: "Sometimes the best course of action is to just ask! "
                }
            },
            {
                questionID: 3,
                type: "radio",
                title: "Have you determined the timing and impact of retirements and identified knowledge gaps to be filled?",
                questionContent: {
                    yes: "Excellent—with this information, you can invite older employees to share and contribute knowledge during their remaining years in your organization.",
                    no: "Don’t miss the opportunity to involve older employees in planning for their eventual transition. "
                }
            }
        ]
    },
    {
        sectionID: 3,
        sectionTitle: "Flexible Work Arrangements",
        questions: [{
                questionID: 1,
                type: "radio",
                title: "Do you have flexible work arrangements that give employees increased control over work hours or location?",
                questionContent: {
                    yes: "Excellent — flexibility will help you retain the wisdom and experience of older workers.",
                    no: "Older workers have wisdom and experience that is valuable to your organization. Flexibility is essential for retention."
                }
            },
            {
                questionID: 2,
                type: "radio",
                title: "Do you offer transitional work options for retirement-eligible employees such as lateral transfers or phased retirement?",
                questionContent: {
                    yes: "Great — you recognize the value of your older employees’ wisdom and experience.",
                    no: "Older workers have wisdom and experience that is valuable to your organization. Flexibility is essential for retention."
                }
            },
            {
                questionID: 3,
                type: "radio",
                title: "Do you have postretirement work options such as consulting or temporary work?",
                questionContent: {
                    yes: "Very good — short-term rehiring can save a fortune on training costs!",
                    no: "This would be good to consider since it saves on onboarding and training costs."
                }
            }
        ]
    }, {

        sectionID: 4,
        sectionTitle: "Training and Learning Opportunities",
        questions: [{
            questionID: 1,
            type: "radio",
            title: "Do you have training programs to keep employees' technical and computer skills current?",
            questionContent: {
                yes: " Glad to hear it! Training keeps the work fresh and new.",
                no: "Consider how training programs can keep employees at the top of their game. "
            }
        }, {
            questionID: 2,
            type: "radio",
            title: "Do older workers have equal access to training programs and promotional opportunities ? ",
            questionContent: {
                yes: "Excellent — we hope you tap older employees with on-the-job experience, transferable skills, and proven commitment to your organization. ",
                no: "Too many employers forget that on-the-job experience can often outweigh education or forget to look for transferable skills and lateral job opportunities. "
            }
        }, {
            questionID: 3,
            type: "radio",
            title: "Do you have programs to capitalize on the experience of older workers (e.g., mentorships, job rotation, and knowledge transfer training)?",
            questionContent: {
                yes: "Great — you recognize the value of your older employees’ wisdom and experience. ",
                no: "Consider how valuable on-the-job experience can be transferred to younger staff."
            }
        }, {
            questionID: 4,
            type: "radio",
            title: "Do you provide financial and retirement planning information to retirement - eligible employees ? ",
            questionContent: {
                yes: "Glad to hear it — helping older workers ease into retirement on their own terms reduces stress in the workplace. ",
                no: "It’s a win-win when you help older employees ease into retirement on their own terms. "
            }
        }, {
            questionID: 5,
            type: "radio",
            title: "Do you offer employees information about or connections with community service opportunities ? ",
            questionContent: {
                yes: "Excellent — this effort benefits you through staff satisfaction and community good will. ",
                no: "When your employees get involved in community service that they enjoy, it builds good will— theirs and the community’ s. "
            }

        }]
    },
    {
        sectionID: 5,
        sectionTitle: "Health and Benefits ",
        questions: [{
            questionID: 1,
            type: "radio",
            title: "Do you offer healthcare options to address the needs of older workers such as cafeteria plan benefits, prescription coverage, or eldercare ? ",
            questionContent: {
                yes: "Thank you! Flexibility is key to retaining the wisdom and experience of older workers. ",
                no: "Benefits are an important component of your overall compensation package, and flexibility is key. "
            }
        }, {
            questionID: 2,
            type: "radio",
            title: "Is your retirement plan structured to encourage older workers to select phased retirement or work beyond normal retirement age?",
            questionContent: {
                yes: "Great! Often valuable older employees will choose to stay on, given a little flexibility. ",
                no: "It’s a win-win when you help older employees ease into retirement on their own terms. "
            }
        }, {
            questionID: 3,
            type: "radio",
            title: "Do you offer similar benefits to both part-time and full-time employees ? ",
            questionContent: {
                yes: "Glad to hear it! Flexibility is key to retaining the wisdom and experience of older workers. ",
                no: "Part-time employment can be a beneficial transitional step toward retirement for older workers. "
            }
        }, {
            questionID: 4,
            type: "radio",
            title: "Have you reviewed the physical requirements of your workplace and identified special needs? ",
            questionContent: {
                yes: "Excellent! Sometimes very modest adjustment can make a world of difference for someone whose vision, hearing, or joints aren’ t as strong as they used to be. ",
                no: "It’s worthwhile to ensure that physical stress isn’ t causing valuable older workers to leave. "
            }
        }, {
            questionID: 5,
            type: "radio",
            title: "Do you have wellness programs to encourage health maintenance ? ",
            questionContent: {
                yes: "Glad to hear it! Staying healthy is a worthy goal for everyone. ",
                no: "There are some wonderful workplace wellness resources. "
            }
        }, {
            questionID: 6,
            type: "radio",
            title: "Do you provide information or support for employees in a caregiver role ? ",
            questionContent: {
                yes: "Thank you for recognizing that family caregiving responsibilities can cause a lot of stress. ",
                no: "A little flexibility goes a long way to helping family caregivers manage the stress of caring for anyone with special needs. "
            }
        }]
    },
    {
        sectionID: 6,
        sectionTitle: "Age-Friendly Culture ",
        questions: [{
            questionID: 1,
            type: "radio",
            title: "Do you have age diversity training for your supervisory and lead staff that covers age discrimination laws, the value of older workers in the workforce, and how to eliminate age - related stereotypes?",
            questionContent: {
                yes: "Wonderful — this isn’t common yet so you’re leading the way!",
                no: "This is definitely worth considering. "
            }
        }, {
            questionID: 2,
            type: "radio",
            title: "Do you periodically review hiring, evaluation, and promotion policies to assure that they are age neutral?",
            questionContent: {
                yes: "Excellent — this task keeps elimination of potential age discrimination as a priority. ",
                no: "This is relatively easy to do and helps prioritize elimination of potential age discrimination. "
            }
        }, {
            questionID: 3,
            type: "radio",
            title: "Are your downsizing practices age-neutral?",
            questionContent: {
                yes: "Glad to hear it. The federal Age Discrimination in Employment Act forbids discrimination against people who are age 40 or older. ",
                no: "Be sure you have objective criteria for downsizing that does not violate the law. "
            }
        }, {
            questionID: 4,
            type: "radio",
            title: "Are your training programs and work teams crossgenerational?",
            questionContent: {
                yes: "Great—there’s so much value in diversity!",
                no: "Cross-generational trainings and teams are another way that workers can transfer knowledge. "
            }
        }]
    }
]

let customerTest = [businessInfo,
    {
        sectionID: 2,
        sectionTitle: "Marketing",
        questions: [{
                questionID: 1,
                type: "radio",
                title: "Do you promote products, services, and business features that are good for older adults?",
                questionContent: {
                    yes: "That’s great—keep up the good work!",
                    no: "Older people make up a sizeable percentage of the consumer market that continues to grow."
                }
            },
            {
                questionID: 2,
                type: "radio",
                title: "Is your website easy to navigate with zoom / text resize features?",
                questionContent: {
                    yes: "Glad to hear it! Your customers are glad to see it!",
                    no: "Text size is a basic element of an age - friendly website. There are many ways to make your website easy to use. "
                }
            },
            {
                questionID: 3,
                type: "radio",
                title: "Are your signs, printed materials, and website fonts large and easy to read? ",
                questionContent: {
                    yes: "Excellent — you want customers to get the information they need!",
                    no: "Make it easy for all people to get the information they need. "
                }
            },
            {
                questionID: 4,
                type: "radio",
                title: "Are your materials available in different languages?",
                questionContent: {
                    yes: "Thanks for letting customers who don’t read English know that you care!",
                    no: "Consider whether you have potential customers who were not born here. "
                }
            }
        ]
    }, {
        sectionID: 3,
        sectionTitle: "Ambiance",
        questions: [{
            questionID: 1,
            type: "radio",
            title: "Do you have adequate non-glare lighting throughout your place of business, illuminating products and/or work spaces? ",
            questionContent: {
                yes: "Great—thanks for making your place of business easy on the eyes!",
                no: "Good lighting not only feels better but makes everything look better. "
            }
        }, {
            questionID: 2,
            type: "radio",
            title: "If music maintained at a level that allows for easy conversation?",
            questionContent: {
                yes: "Excellent—everyone is more comfortable when they can communicate with ease. ",
                no: "Many people avoid businesses that play loud music or have poor acoustical buffers."
            }
        }]
    }, {
        sectionID: 4,
        sectionTitle: "Design",
        questions: [{
            questionID: 1,
            type: "radio",
            title: "Have you marked stairs, inclines, and drops that could be safety hazards? ",
            questionContent: {
                yes: "Great — safety is paramount!",
                no: "Employee and customer safety is paramount. "
            }
        }, {
            questionID: 2,
            type: "radio",
            title: "Are your aisles wide enough for two people to pass easily? ",
            questionContent: {
                yes: "Glad to hear it! Ample space makes everyone more comfortable.It’s especially important for anyone who uses a wheelchair. ",
                no: "Paths and aisles are required to be 36” or wider."
            }
        }, {
            questionID: 3,
            type: "radio",
            title: "Are your doors easy to open and wide enough for a large wheelchair to pass through(36” + )? ",
            questionContent: {
                yes: "Thank you for making it easy for people to get in the door!",
                no: "It’s hard to do business with someone who cannot get through your door.It’ s also the law that doorways have to be accessible. "
            }
        }, {
            questionID: 4,
            type: "radio",
            title: "Do you place products within reach on shelves or offer help reaching items? ",
            questionContent: {
                yes: "Great—that’s just common sense, right?",
                no: "What’s within reach for one person may be a huge or impossible stretch for someone else."
            }
        }, {
            questionID: 5,
            type: "radio",
            title: "Do you provide a publicly accessible bathroom? ",
            questionContent: {
                yes: "Many thanks! This is so important for customer comfort and loyalty. ",
                no: "The availability of clean, conveniently located, wellsigned, accessible toilets is generally regarded as an important age - friendly feature in our built environment. "
            }
        }, {
            questionID: 6,
            type: "radio",
            title: "Do you have a place where customers can sit and rest? ",
            questionContent: {
                yes: "Excellent—this is good for older people, parents of young children, bored significant others — just about everyone!",
                no: "Particularly as people age, they may have difficulty standing for long periods of time but some seating is good for everyone. "
            }
        }]
    },
    {
        sectionID: 5,
        sectionTitle: "Experience",
        questions: [{
            questionID: 1,
            type: "radio",
            title: "Have you trained staff to practice respect and patience with all customers, in person and on the phone? ",
            questionContent: {
                yes: "Thank you—empathy, patience, and respect are core customer service skills. ",
                no: "Customer service training is needed in most workplaces to ensure that staff are trained to communicate in a respectful, noncondescending tone. "
            }
        }, {
            questionID: 2,
            type: "radio",
            title: "Have you trained staff to be mindful when speaking to people who have low vision or hearing loss? ",
            questionContent: {
                yes: "Thank you—we know your customers appreciate consideration from your staff. ",
                no: "Disability language and etiquette is a skill."
            }
        }, {
            questionID: 3,
            type: "radio",
            title: "Have you trained staff to assist those with physical challenges and how to handle any incidents that may occur? ",
            questionContent: {
                yes: "Thank you — we know your customers appreciate consideration from your staff. ",
                no: "Disability language and etiquette is a skill. "
            }
        }]
    }
]

let customerGeneralTips = new Map([
    ['Marketing', [{
            tipsTitle: "Promotion",
            tipsLi: [
                "Promote products, services, and business features that could be of interest to older adults in printed and web advertisements. ",
                "Create inclusive marketing materials. Include older adults in ads featuring customers using your products/services (if applicable) and make sure your print and web ads reach older adults.",
                "Place discounts or promoted products for older adult shoppers in places where they will be seen by the right audience. ",
                "Provide menus/brochures both online and in print if you offer delivery services. Many people don’ t have regular access to a computer. ",
            ]
        },
        {
            tipsTitle: "Website",
            tipsLi: [
                "Make key information simple to find for everyone. Repeat your business name, address,hours, and contact information on every page.",
                "Prominently place navigation bars on the top or side of each page and avoid complicated menus or drop/downs. Include zoom controls or text resize buttons clearly on every page.",
                "Design your site with older computers in mind. Be careful about using too much audio/video and limit Flash elements, which are incompatible with many computers and mobile devices",
                "Provide captions on videos to improve comprehension among people with hearing loss, English language learners, and others.",
                "Ensure that your website is WCAG compliant (Web Content Accessibility Guidelines 2.0 AA). That’s the ADA standard."
            ]
        },
        {
            tipsTitle: "Material Design",
            tipsLi: [
                "Design easy-to-read materials that clearly highlight key information.",
                "Use simple language in your materials that can be understood by as many people as possible",
                "Offer materials in multiple languages — think about what languages are spoken in your neighborhood. After English, top-tier languages in Seattle are Cantonese (written: Traditional Chinese), Korean, Mandarin (written: Simplified Chinese), Somali, Tagalog, and Vietnamese."
            ]
        },
        {
            tipsTitle: "Tips",
            tipsLi: [
                "Use sans serif type fonts like Helvetica and Calibri, which don’t have small features at the end of their strokes. Serif fonts like Times New Roman have decorative end strokes and can be hard to read in small sizes.",
                "Always use a 12-point font or higher when possible.",
                "Leave 1-inch margins and space between lines of text.",
                "Use vivid colors. Avoid light shades like pastels and greys.",
                "Create a high contrast between text and the background of your materials. Avoid using text and a background of the same/similar color as they tend to fade together when viewed.",
                "Use simple and clear designs without too much decoration that can detract from key information."
            ]
        }
    ]],
    ['Ambiance', [{
        tipsTitle: "Sound",
        tipsLi: [
            "Avoid loud music. Many customers have difficulty sorting out announcements and conversation from background noise.",
            "Have music-free or reduced music hours during times older customers are most likely to shop.",
            "Play a mix of music from different time periods and styles.",
            "Reserve certain quiet areas of your business (e.g., quiet tables or a private conference area).",
            "Use mass and space to reduce outside noise. Heavy walls and thick windows help keep traffic/outside noise to a minimum.",
            "Control noise by keeping doors closed or installing noise-absorption measures (e.g., from machines, production activities, or construction)."
        ]
    }, {
        tipsTitle: "Lighting",
        tipsLi: [
            "Cut down on glare by installing shades on lights or providing indirect/filtered lighting.",
            "Use greater intensities of color. As eyes age, colors will appear dull or grey.",
            "Provide adequate lighting throughout the business especially entrances, exits, and hallways.",
            "Include small direct “task” lights over areas where reading or other visually demanding tasks are necessary (LED lights can work great for this)."
        ]
    }, {
        tipsTitle: "Tips",
        tipsLi: [
            "Research suggests people like the music they grew up listening to best. If you want to reach out to your older customers, play the music they know and love.",
            "To absorb sound within your space, install carpets, rugs, tapestries, acoustic ceiling tiles, soundboard walls, and partitions.",
            "Customers can have trouble looking at brightly lit objects. As people age, they get more sensitive to glare. ",
            "Task lights can be used under shelves to read labels or on tables to read menus. Lighting from directly above is best since it cuts down on shadows. ",

        ]
    }]],
    ['Design', [{
        tipsTitle: "Safety",
        tipsLi: [
            "Clearly mark stairs, drops, inclines, or any change in floor elevation/material with brightly colored paint or reflective tape.",
            "Keep aisles clear as much as possible during restocking.",
            "Keep the sidewalk in front of your business free of leaves, snow, or other debris.",
            "Remove throw rugs that can catch feet and cause trips. You can also secure edges of rugs to floor with glue or tape.",
            "Clean up puddles and spills immediately to prevent slips"
        ]
    }, {
        tipsTitle: "Accessibility",
        tipsLi: [
            "Install lightweight or automatic doors, if possible, or have staff members on hand to open them when needed.",
            "Make sure interior doors, halls, and aisles are wide enough to accommodate a scooter or walker—minimum 36”.",
            "Ensure that some seating areas can accommodate a wheelchair.",
            "Install a portable ramp if your entrance is not level with the ground.",
            "Install an assisted listening system at customer service checkpoints and in meeting spaces to improve communication."
        ]
    }, {
        tipsTitle: "Restrooms",
        tipsLi: [
            "Provide accessible bathrooms for all customers, if possible, and particularly for any with high needs.",
            "Install toilet paper dispensers within easy reach.",
            "Install auto-flush controls or mount manual controls on the wide side of the toilet no higher than 44” from floor. ",
            "Provide one sink and hand dryer low enough and one stall wide enough for someone in a large wheelchair to use."
        ]
    }, {
        tipsTitle: "Convenience",
        tipsLi: [
            "Provide permanent seating or allow customers to request a temporary seat to rest.",
            "Install a bench or seating area outside of your business.",
            "Place products on shelves within easy reach or have staff on hand to assist. Some people have short stature while others may have limited range of motion.",
            "Offer delivery options for homebound individuals or pick-up options for those who have trouble getting around/navigating your store.",
            "Accept orders by phone, on your website, or at an easily accessible counter at the front of your business. "
        ]
    }, {
        tipsTitle: "Tips",
        tipsLi: [
            "Learn about ADA Title III requirements for small businesses.",
            "Outdoor seating is a great place to encourage lingering conversations and refills.",
            "Place essentials, popular items and items geared towards older adults within easy reach (light bulbs, coffee, tea, cold medicine, vitamins, etc.). ",
            "Keep a three-feet-wide accessible route throughout your business.",
            "Place ramps in areas with changes in floor height to minimize steps."

        ]
    }]],
    ['Experience', [{
        tipsTitle: "Customer Service",
        tipsLi: [
            "Train staff to assist those with vision and hearing challenges. Disability language and etiquette trainings are available online and also from the Northwest ADA Center. ",
            "Encourage staff to be respectful and patient with all customers and give them the authority to provide extra customer service as they see fit. ",
            "Teach staff not to discriminate about the tastes or preferences of a customer based on age or to demonstrate other \"ageist\" behavior. ",
            "Train staff to recognize signs that someone needs physical/ medical assistance or is being physically / financially abused. ",
            "Provide training on how to handle incidents such as falls and accidents while preserving customers’ dignity as much as possible. "
        ]
    }, {
        tipsTitle: "Communication",
        tipsLi: [
            "Train staff to speak clearly and slowly but not to “elder speak” (use an exaggerated tone or overly simple words).",
            "Ask staff not to raise their voice above a normal level when speaking to older customers or to get their attention. Instead have staff lightly tap a customer on the shoulder, say “excuse me sir/ma’am,” and speak with clear diction.",
            "Train staff (especially female staff) to lower the pitch of their voice when speaking to someone who has difficulty hearing. Lower pitched voices tend to be heard more clearly."
        ]
    }, {
        tipsTitle: "Tips",
        tipsLi: [
            "Provide a personal shopping service for older adults or make staff available to help read product labels, get products down from shelves, and offer directions.",
            "If you don’t normally provide delivery, consider offering it on a case-by-case basis to those that need it. You can do this by partnering with a courier service.",
            "Staff should ALWAYS be rewarded for providing extra customer service to any customer who needs it, including older adults.",
            "Don’t shout or speak overly loud to customers who seem to have difficulty understanding as it can make them feel singled out and embarrassed.",
            "High pitches and words with F, S, K, and SH sounds can be harder for older adults to understand.",
            "Ageism is any type of discrimination based on age and includes drawing conclusions about someone’ s preferences, ability, income, or ideas based on their age(especially older age). ",
            "You can partner with local community or faith-based organizations to find trainings on physical / medical assistance and physical / financial abuse.",
            "Develop a plan for an anticipated or unforeseen disaster and consider the needs of older people your services and products might help to meet. "
        ]
    }]]
])

export default {
    TOA,
    businessInfo,
    employerTest,
    customerTest,
    customerGeneralTips
}