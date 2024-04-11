//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.19;


contract HelloWorld {
    string private hello_string;

    constructor(string memory _greeting) {
        hello_string = _greeting;
    }

    function greet() public view returns (string memory) { // public means it can be read from react app and view means it is read only
        return hello_string;
    }

    function setGreeting(string memory _greeting) public {
        hello_string = _greeting;
    }
}