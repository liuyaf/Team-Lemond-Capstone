package main

import (
	"fmt"
	"os"
)

func main() {
	addr := os.Getenv("ADDR")

	tlscert := os.Getenv("TLSCERT")

	tlskey := os.Getenv("TLSKEY")

	// mux := http.NewServeMux()

	// mux
	// the use of the mux requires

	if len(addr) == 0 {
		addr = ":443"
	}

	if len(tlscert) == 0 {
		fmt.Println("tls cert must not be empty")
		os.Exit(3)
	}

	if len(tlskey) == 0 {
		fmt.Println("tls key must not be empty")
		os.Exit(3)
	}

}
