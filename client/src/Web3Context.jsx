import React, { useState, createContext, useEffect } from "react";

import { ethers } from "ethers";

export const Web3Context = createContext();

export const Web3Provider = ({ children }) => {
    const [accounts, setAccounts] = useState(null);
    const [provider, setProvider] = useState(null);

    useEffect(() => {
        const loadProvider = async () => {
            if (window.ethereum) {
                const provider = new ethers.provider.Web3Provider(window.ethereum);
                setProvider(provider);

                window.ethereum.on("accountsChanged", (accounts) => {
                    setAccounts(accounts[0]);
                });
            }
        };
        loadProvider();
    }, []);

    const connectWallet = async () => {
        if (window.ethereum) {
            const accounts = await window.ethereum.requests({
                method: "eth_requestAccounts",
            });
        } else {
            alert("Please install metamask");
        }
    };

    return <Web3Context.Provider value={{ accounts, connectWallet }}>{children}</Web3Context.Provider>;
};
