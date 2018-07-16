
 $("#connecter").click(function()
 {
	var login1 = $("#login").val();
	var mdp1 = $("#mdp").val();
	// console.log(login);
	// 	console.log(mdp);

    $.ajax({
					url:"/auth",
					method: "POST",
					data : {
					login: login1,
					mdp: mdp1,
					        }
			});

	});
