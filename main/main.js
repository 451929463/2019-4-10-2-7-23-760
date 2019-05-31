module.exports = function main(inputs) {
	let distance = inputs.distance;
	let parkTime = inputs.parkTime;
	
	INIT_PRICE = 6 ;
	PARK_TIME_UNIT_PRICE = 0.25 ; 
	DISTANCE_UNIT_PRICE = 0.8 ;
	INIT_DISTANCE = 2 ;
	PRICE_RAISED_RATE = 0.5	
	NORMAL_DISTANCE = 8 ;
	
	const parkPrice = PARK_TIME_UNIT_PRICE * parkTime;
	const finalPrice = INIT_PRICE + calculatePriceBeyondInitDistance(distance) + parkPrice;
	
	return Math.round(finalPrice);
};

function calculatePriceBeyondInitDistance(distance) {
	if(distance <= INIT_DISTANCE){
		return 0;
	}
	
	if(distance <= NORMAL_DISTANCE) {
		return (distance - INIT_DISTANCE) * DISTANCE_UNIT_PRICE;
    }
	return calculatePriceBeyondNormalDistance(distance);	
}

function calculatePriceBeyondNormalDistance(distance) {
	const unitPriceBeyondNormalDistance = DISTANCE_UNIT_PRICE + DISTANCE_UNIT_PRICE * PRICE_RAISED_RATE; 
    return (NORMAL_DISTANCE - INIT_DISTANCE) * DISTANCE_UNIT_PRICE + (distance - NORMAL_DISTANCE) * unitPriceBeyondNormalDistance;				
}



