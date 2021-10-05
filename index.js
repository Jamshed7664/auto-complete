function autoView(inp, arr) {
    var currentFocus;
    inp.addEventListener("input", function(e) {
        var a, view, i, val = this.value;
        closeView();
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        this.parentNode.appendChild(a);
        for (i = 0; i < arr.length; i++) {
            if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
                view = document.createElement("DIV");
                view.innerHTML = arr[i].substr(0, val.length)
                view.innerHTML += arr[i].substr(val.length);
                view.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
                view.addEventListener("click", function(e) {
                    inp.value = this.getElementsByTagName("input")[0].value;
                    closeView();
                });
                a.appendChild(view);
            }
        }
    });

    function closeView(elmnt) {
        var x = document.getElementsByClassName("autocomplete-items");
        for (var i = 0; i < x.length; i++) {
            if (elmnt != x[i] && elmnt != inp) {
                x[i].parentNode.removeChild(x[i]);
            }
        }
    }

}
var values = ["create", "Country", "HTML", "Paris", "Maggi", "cream"];

autoView(document.getElementById("myInput"), values);