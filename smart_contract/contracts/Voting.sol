// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Voting {
    struct Poll {
        string title;
        string[] options;
        mapping(uint => uint) votes;
        bool active;
    }

    mapping(uint => Poll) public polls;
    uint public pollCount;

    function createPoll(string memory _title, string[] memory _options) public {
        Poll storage newPoll = polls[pollCount];
        newPoll.title = _title;
        newPoll.options = _options;
        newPoll.active = true;
        pollCount++;
    }

    function vote(uint _pollId, uint _optionIndex) public {
        require(_pollId < pollCount, "Poll does not exist");
        require(polls[_pollId].active, "Poll is not active");
        polls[_pollId].votes[_optionIndex]++;
    }

    function endPoll(uint _pollId) public {
        require(_pollId < pollCount, "Poll does not exists");
        polls[_pollId].active = false;
    }
}
