pragma solidity ^0.6.0;

contract Auth {

    address private admin;

    constructor() public {
        admin = msg.sender;
    }

    function isAdmin(address user) public view returns (bool) {
        return user == admin;
    }
}