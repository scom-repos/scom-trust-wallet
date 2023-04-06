define("@scom/scom-trust-wallet", ["require", "exports", "@ijstech/eth-wallet", "@ijstech/components"], function (require, exports, eth_wallet_1, components_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let moduleDir = components_1.application.currentModuleDir;
    function fullPath(path) {
        if (path.indexOf('://') > 0)
            return path;
        return `${moduleDir}/${path}`;
    }
    class TrustWalletProvider extends eth_wallet_1.EthereumProvider {
        get displayName() {
            return 'Trust Wallet';
        }
        get image() {
            return fullPath('img/trustwallet.svg');
        }
        get provider() {
            return window['ethereum'];
        }
        get homepage() {
            return 'https://link.trustwallet.com/open_url?url=' + window.location.href;
        }
        installed() {
            let ethereum = window['ethereum'];
            return !!ethereum && !!ethereum.isTrust;
        }
    }
    exports.default = TrustWalletProvider;
});
