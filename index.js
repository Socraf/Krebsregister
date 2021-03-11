    $(document).ready(function() {
        function check_input_icd() {
            if ($("#icd_input").val().length == 0) {
                $("#icd_label").text("ICD-Code Bezeichner");
            };
        }
        /*Funktion, wenn ein Element aus der Hilfesuche für IKD-Codes ausgewählt wird
        function when an element of the help search for icd codes is chosen */
        $("tr").click(function() {
            icd_name = $("#icd_name", this).text();
            icd_description = $("#icd_description", this).text();
            icd_name_txt = $.trim(icd_name);
            icd_description_txt = $.trim(icd_description);
            $("#icd_input").val(icd_name_txt);
            $("#icd_label").text(icd_description_txt);
            console.log(icd_name_txt);
            console.log(icd_description_txt);
            $("#icd_container").modal("hide");
        });
        /*wenn man die Taste für die Suche nach einem ICD-Code drückt
        when pressing the button to search for an icd code*/
        $("#search_icd").click(function() {
            check_input_icd();
        });
        /*wenn man die Taste zum Hinzufügen eines neuen icd-Dokuments drückt
        when pressing the button to add a new document icd*/
        $("#new_icd").click(function() {
            check_input_icd();
        });
    });