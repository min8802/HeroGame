interface Window {
    ethereum : any
}

interface nftMetadata {
    name : string,
    description: string,
    image: string,
    attributes?: 
    {
        trait_type: string,
        value: string
    }[];
}