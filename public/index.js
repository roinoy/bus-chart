
$.ajax({
	url: "/bus",
	dataType: 'json',
	success: function (res) {
		var arr = JSON.parse(res);
		console.log(arr);
		var dic = {};
		arr.forEach(function (trip) {
			var start = new Date(trip.startTime).getHours();
			var end = new Date(trip.endTime).getHours();
			for (var i = start; i <= end; i++) {
				dic[i] ? ++dic[i] : (dic[i] = 1);
			}
		});
		var labels = [];
		var data = [];
		for (var t in dic) {
			labels.push(t + ': 00');
			data.push(dic[t]);
		}
		showChart(labels, data);
		console.log(dic);
	}
});

function showChart(labels, data) {
	
	var barChartData = {
		labels: labels,
		datasets: [
			{
				fillColor: "rgba(220,220,220,0.5)",
				strokeColor: "rgba(220,220,220,0.8)",
				highlightFill: "rgba(220,220,220,0.75)",
				highlightStroke: "rgba(220,220,220,1)",
				data: data
			}
		]
	}

	var ctx = document.getElementById("canvas").getContext("2d");
	window.myBar = new Chart(ctx).Bar(barChartData, {
		responsive: true
	});
}