/// <amd-module name="@scom/scom-trust-wallet" />
declare module "@scom/scom-trust-wallet" {
    import { EthereumProvider } from '@ijstech/eth-wallet';
    export class TrustWalletProvider extends EthereumProvider {
        get displayName(): string;
        get image(): string;
        get provider(): any;
        get homepage(): string;
        installed(): boolean;
    }
}
