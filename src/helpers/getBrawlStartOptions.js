import brawlApi from "@/api/brawlStartApi";

const getBrawlStars = () => {
    const BrawlStarsArr = Array.from( Array(55) )

    return BrawlStarsArr.map((_, index)=> index + 1)
}

const getBrawlStarsOptions = async() => {
    const mixedBrawlStart = getBrawlStars().sort( () => Math.random() - 0.5 )
 
    const brawls = await getBrawlStarsNames(mixedBrawlStart.splice(0,4))

    return brawls
}   

const getBrawlStarsNames = async ( [a, b, c, d] = [] ) => {

    // const resp = await brawlApi.get(`/1.json`)
    // console.log("resp",resp.data.name, resp.data.id)

    const promiseArr = [
        brawlApi.get(`/${ a }.json`),
        brawlApi.get(`/${ b }.json`),
        brawlApi.get(`/${ c }.json`),
        brawlApi.get(`/${ d }.json`),
    ]

    const [p1, p2, p3, p4] = await Promise.all( promiseArr )
    
    return [
        {name: p1.data.name ,  id: p1.data.id},
        {name: p2.data.name ,  id: p2.data.id},
        {name: p3.data.name ,  id: p3.data.id},
        {name: p4.data.name ,  id: p4.data.id},
    ]

}

export default getBrawlStarsOptions