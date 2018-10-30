pragma solidity ^0.4.24;

contract MyStringStore {
  string public myString = "Hello World";

  function set(string x) public {
    bytes memory tempEmptyStringTest = bytes(x);

    require(tempEmptyStringTest.length > 0, "String must not be empty.");

    myString = x;
  }
}