

export const calculatePoints = (receipt)=> {
    let points = 0;

    // points for every alpha-numeric character
    for(let i = 0; i < receipt.retailer.length; i++){
        const char = receipt.retailer[i]
        if(('a' <= char && char <= 'z') ||('A' <= char && char <= 'Z') ||('0' <= char && char <= '9')){
            points++;
        }
    }

    // convert the total to float number and then get points for it
    if(parseFloat(receipt.total) % 1 === 0){
        points+= 50
    }

    if(parseFloat(receipt.total) % 0.25 === 0){
        points += 25
    }

    // get the length of items array and then
    const lengthOfItems = receipt.items.length
    points += (Math.floor(lengthOfItems/2)*5 )// dividing length by 2 and taking the floor value gives the number of pairs and then just multiply it by 5

    // getting points for the trimmed length of the item description
    receipt.items.forEach(item => {
        let trimmedLength = item.shortDescription.trim().length
        if(trimmedLength % 3 === 0){
            let roundedUp = Math.ceil(parseFloat(item.price) * 0.2)
            points += roundedUp
        }
    });

    //getting day in purchase date
    const purchaseDay = receipt.purchaseDate.split('-')[2]
    if (parseInt(purchaseDay) % 2 !== 0) {
        points += 6
    }

    //getting the purchase Time hour and minutes
    const purchaseTime = receipt.purchaseTime.split(':')
    const hour = purchaseTime[0]
    const minutes = purchaseTime[1]
    if (parseInt(hour) === 14 || (parseInt(hour) === 15 && minutes < 60)) {
        points += 10
    }

    return points
}