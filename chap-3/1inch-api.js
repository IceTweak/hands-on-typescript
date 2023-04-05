import fetch from "node-fetch";

// list of DEXes on 1inch aggregator
(async function get1inchDexes() {
    const res = await fetch(`https://api.1inch.io/v5.0/1/liquidity-sources`);

    if (res.ok) {
        const result = await res.json();
        // filter by word SWAP
        const swapFilter = (obj) => obj.title.includes('swap');
        const swapDexes = result.protocols.filter(swapFilter);
        console.log(swapDexes);
    } else {
        console.log('Failed to fetch');
    }
}) ();