    $(document).ready(function() {
        function check_input_icd() {
            if ($("#icd_input").val().length == 0) {
                $("#icd_label").text("ICD-Code Bezeichner");
            };
        }
        /*Funktion, wenn ein Element aus der Hilfesuche für ICD-Codes ausgewählt wird
        function when an element of the help search for icd codes is chosen */
        $("#patient_container tr").click(function() {
            /* Modal Fenster Patientenliste: Auswahl  */
            pat_nr = $("#pat_nr", this).text();
            pat_nr_txt = $.trim(pat_nr);
            pat_nname = $("#pat_nname", this).text();
            pat_nname_txt = $.trim(pat_nname);
            pat_vname = $("#pat_vname", this).text();
            pat_vname_txt = $.trim(pat_vname);
            pat_gname = $("#pat_gname", this).text();
            pat_gname_txt = $.trim(pat_gname);
            pat_gesch = $("#pat_gesch", this).text();
            pat_gesch_txt = $.trim(pat_gesch);
            pat_gebdat = $("#pat_gebdat", this).text();
            pat_gebdat_txt = $.trim(pat_gebdat);
            $("#pat_nr_in").val(pat_nr_txt);
            $("#pat_nname_in").val(pat_nname_txt);
            $("#pat_vname_in").val(pat_vname_txt);
            $("#pat_gname_in").val(pat_gname_txt);
            /*Geschlecht */
            if (pat_gesch_txt == 'M') {
                $("#pat_gesch_in").val("1 männlich");
            } else if (pat_gesch_txt == 'W') {
                $("#pat_gesch_in").val("2 weiblich");
            } else if (pat_gesch_txt == 'U') {
                $("#pat_gesch_in").val("3 unbekannt");
            }
            /*Geburtsdatum */
            /*space = "-";
            jahr = pat_gebdat_txt.substr(6, 10);
            month = pat_gebdat_txt.substr(3, 2);
            tag = pat_gebdat_txt.substr(0, 2);
            var res = jahr.concat(space);
            res = res.concat(month);
            res = res.concat(space);
            res = res.concat(tag);
            $("#pat_gebdat_in").val(res);*/
            $("#pat_gebdat_in").val(pat_gebdat_txt);
            $("#patient_container").modal("hide");
        });
        /*Funktion, wenn ein Element aus der Hilfesuche für ICD-Codes ausgewählt wird
        function when an element of the help search for icd codes is chosen */
        $("#icd_container tr").click(function() {
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
        /*wenn man die Taste zum Hinzufügen eines neuen ICD-Dokuments drückt
        when pressing the button to add a new document icd*/
        $("#new_icd").click(function() {
            check_input_icd();
        });
        /* 19.03.2021 */
        $("#myInput").on("keyup", function() {
            var value = $(this).val().toLowerCase();
            $("#icd_table #tr_body").filter(function() {
                $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
            });
        });
        /* document.getElementById("a_op_doc").onclick = function() {
             document.getElementById("form_op_doc").submit();
         }*/
        /*16.04.2021 Suchhilfe Patient*/
        $("#myPatient").on("keyup", function() {
            var value = $(this).val().toLowerCase();
            $("#patient_table #tr_body").filter(function() {
                $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
            });
        });
        pat_num = $("#pat_nr_in").val();
        console.log(pat_num);
    });