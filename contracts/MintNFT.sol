// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

contract MintNft is ERC721Enumerable {
    string metadataUri;
    string unrevealedUri;

    mapping(uint => bool) private _tokenRevealed;

        constructor(string memory _name, string memory _symbol, string memory _metadataUri, string memory _unrevealedUri) ERC721(_name, _symbol) {
        metadataUri = _metadataUri;
        unrevealedUri = _unrevealedUri;
    }

    function mintNft() public {
        require(totalSupply() < 4, "No more mint.");

        uint tokenId = totalSupply() + 1;

        _mint(msg.sender, tokenId);
    }

    function tokenURI(uint _tokenId) public view override returns (string memory) {
         if (_tokenRevealed[_tokenId]) {
            return string(abi.encodePacked(metadataUri, Strings.toString(_tokenId), ".json")); 
        } else {
           return unrevealedUri;
        }
    }

    function setIsReveal(uint _tokenId) public {
         _tokenRevealed[_tokenId] = true;
    }

    function getIsReveal(uint _tokenId) public view returns (bool) {
        return _tokenRevealed[_tokenId];
    }
}