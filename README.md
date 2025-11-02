# Product Tracking (product-tracking)

A small Node.js + Express project that uses EJS templates, Firebase, and ethers to track and verify products. The repository also contains a Solidity smart contract (`ProductVerification.sol`) used to anchor or verify product information on a blockchain.

## Contents

- `app.js` - Main Express application server.
- `package.json` - Project metadata and scripts.
- `ProductVerification.sol` - Solidity contract for product verification.
- `script.js`, `push.js`, `request.js` - Client / helper scripts used by the app (JS logic, API calls, or push logic).
- `index.ejs`, `product.ejs`, `error.ejs` - EJS templates used by the Express server.
- `style.css`, `error.css` - Styles for the UI and error page.

## Features

- Rendered UI with EJS templates.
- Integration with Firebase (client and admin) for data storage/auth.
- Uses `ethers` for blockchain interactions (reading/writing to smart contract).
- Contains a Solidity contract for product verification.

## Prerequisites

- Node.js 14+ and npm installed
- (If you use the smart contract) Hardhat or solc to compile/deploy Solidity contracts
- Firebase project credentials (service account JSON for `firebase-admin` and client config for `firebase`)
- Ethereum provider (Infura, Alchemy, or a local node) and a wallet/private key when sending transactions

## Quick start

1. Install dependencies

```bash
npm install
```

2. Provide configuration

- Add Firebase credentials and any required environment variables. The project currently depends on Firebase and ethers; set these values as environment variables or update the code to use a configuration file.

Common environment variables you may need (example names — check `app.js` and other files for exact names):

- `FIREBASE_SERVICE_ACCOUNT` or path to service account JSON
- `FIREBASE_CONFIG_*` for client-side Firebase config
- `ETH_PROVIDER_URL` (e.g. Infura/Alchemy URL)
- `PRIVATE_KEY` (wallet private key for sending transactions)

3. Start the server

```bash
npm start
```

The app listens on the port configured in `app.js` (check the file for the exact default; common examples are `3000` or `8080`).

## Smart contract (ProductVerification.sol)

The Solidity contract in `ProductVerification.sol` appears to be intended for anchoring product verification data on-chain. To compile and deploy it locally, you can use Hardhat:

```bash
npx hardhat compile
# then create a deploy script and run `npx hardhat run --network <network> scripts/deploy.js`
```

If you don't use Hardhat, you can compile the contract with `solc` or another toolchain.

## File overview and purpose

- `app.js` — Express server setup, route handlers, template rendering, and integration points for Firebase and ethers.
- `index.ejs` — Home page template showing product list or form.
- `product.ejs` — Product detail or verification page.
- `error.ejs` / `error.css` — Error UI and styles.
- `script.js` — Front-end JS logic for UI interactions.
- `push.js` / `request.js` — Helper scripts that may push data or make HTTP requests to backend or external services.
- `ProductVerification.sol` — Solidity smart contract for product verification.

## Assumptions and notes

- The repository expects Firebase configuration and an Ethereum provider to be supplied externally; there are no secrets included in the repo.
- Check `app.js`, `push.js`, and other files to find the exact environment variables or configuration patterns used; update them to point to your Firebase project and Ethereum provider.

## Troubleshooting

- If you see Firebase authentication errors, make sure the service account JSON is correct and you initialized `firebase-admin` with it.
- If blockchain interactions fail, verify `ETH_PROVIDER_URL` and that the account/private key has sufficient funds for gas.


