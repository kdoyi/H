$(window).on('load', function () {
	load('#jperfume_list', '4');
	$("#js-btn .button").on("click", function () {
		load('#perfume_list', '4', '#js-btn');
	})
});

function load(id, cnt, btn) {
	var girls_list = id + " .load:not(.active)";
	var girls_length = $(girls_list).length;
	var girls_total_cnt;
	if (cnt < girls_length) {
		girls_total_cnt = cnt;
	} else {
		girls_total_cnt = girls_length;
		$('.button').hide()
	}
	$(girls_list + ":lt(" + girls_total_cnt + ")").addClass("active");
}
