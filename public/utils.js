const getWeb3 = () => {
  return new Promise((resolve, reject) => {
    window.addEventListener("load", async () => {
      console.log(window.ethereum);

      console.log(web3);
      
      if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        try {
          // ask user permission to access his accounts
          await window.ethereum.request({ method: "eth_requestAccounts" });
          resolve(web3);
        } catch (error) {
          reject(error);
        }
      } else {
        reject("must install MetaMask");
      }
    });
  });
};

const getContract = async (web3) => {
  const data = await $.getJSON("./Greeting.json");
  //console.log(data);
  const netId = await web3.eth.net.getId();
  //console.log("netId: "+netId)
//   const deployedNetwork = data.networks[netId];
//   const greeting = new web3.eth.Contract(
//     data.abi,
//     deployedNetwork && deployedNetwork.address
//   );
  const greeting = new web3.eth.Contract(
    data.abi,
    "0xdeD8Cd1b9bE44FE4c90c7C0789C61a54865cdBB7"
  );
  return greeting;
};
