import brawlApi from "@/api/brawlStartApi";

const getBrawlStars = () => {
    const BrawlStarsArr = Array.from( Array(55) )

    return BrawlStarsArr.map((_, index)=> index + 1)
}

const getBrawlStarsOptions = () => {
    const mixedBrawlStart = getBrawlStars().sort( () => Math.random() - 0.5 )

    console.log( mixedBrawlStart )
    getBrawlStarsNames(mixedBrawlStart.splice(0,4))
}

const getBrawlStarsNames = async ( [a, b, c, d] = [] ) => {

    const resp = await brawlApi.get(`/brawlstar.json`)
    console.log("resp",resp)

}

export default getBrawlStarsOptions