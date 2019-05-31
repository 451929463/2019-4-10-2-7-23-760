module.exports = function main(inputs) {
	let distance = inputs.distance;
	let parkTime = inputs.parkTime;
	
	price = 0 ;
	basic_price = 6 ; //起步价
	parkTime_price = 0.25 ; //等待时间计费
	distance_price = 0.8 ; //普通计费
	surpass_price = distance_price * (1 + 0.5);  //超出增收
	basic_distance = 2 ; //起步路程
	surpass_distance = 8 ; //超出路程
	
  
	
	if(distance <= basic_distance ){
		short_distance(parkTime);
	}
	
	if(distance > basic_distance && distance <= surpass_distance){
		middle_distance(distance,parkTime);
	}
	
	if(distance > surpass_distance ){
		long_distance(distance,parkTime);
	}
	
    return Math.round(price);
	
};
	function short_distance(parkTime){
		price = basic_price + parkTime_price * parkTime;
		return price;
	}
	
	function middle_distance(distance,parkTime){
		price = short_distance(parkTime) + (distance-basic_distance) * distance_price;
	}
	
	function long_distance(distance,parkTime){
		price = short_distance(parkTime) + (surpass_distance - basic_distance)* distance_price + (distance-surpass_distance) * surpass_price;
	}
