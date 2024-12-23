// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ProductVerification {
    struct Product {
        string name;
        string location;
        bool organic;
        string dataHash;
    }

    mapping(uint256 => Product) public products;

    function addProduct(uint256 id, string memory name, string memory location, bool organic, string memory dataHash) public {
        products[id] = Product(name, location, organic, dataHash);
    }

    function verifyProduct(uint256 id, string memory dataHash) public view returns (bool) {
        return keccak256(abi.encodePacked(products[id].dataHash)) == keccak256(abi.encodePacked(dataHash));
    }
}
