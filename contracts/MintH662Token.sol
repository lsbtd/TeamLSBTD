// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MintH662Token is ERC721Enumerable, Ownable {
    constructor(string memory _name, string memory _symbol) ERC721(_name, _symbol) {}

    mapping(uint => string) tokenURIs;

    function tokenURI(uint _tokenId) override public view returns (string memory) {
        return string(
            abi.encodePacked("https://h662.mypinata.cloud/ipfs/", tokenURIs[_tokenId])
        );
    }

    function mintToken(string memory _tokenURI) public onlyOwner {
        uint tokenId = totalSupply() + 1;

        tokenURIs[tokenId] = _tokenURI;
        
        _mint(owner(), tokenId);
    }
}