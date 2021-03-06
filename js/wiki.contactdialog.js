/* ----------------------- */
/*  Widget: contactDialog  */
/* ----------------------- */
$.widget("wiki.contactDialog", $.ui.dialog, {
	options: {
		autoOpen: false,								// Dialog nicht automatisch bei instanzierung öffnen
		modal: true,									// Objekt soll im Focus/im Vordergrund sein
		width: 400
	},
	
	
	/* -------------- */
	/*  open: Widget  */
	/* -------------- */
	open: function(wiki) {								// Übergabe der Werte aus wiki - Aus wiki wird das Attribut url ausgelesen, damit der richtige Datensatz gelöscht werdenn kann.
		this._wiki = wiki;
		this._super();
	},
	
	
	/* ---------------------- */
	/*  create: CLOSE Button  */
	/* ---------------------- */
	_create: function() {								// Button konfigurieren
		var that = this;								// Übergabe des Objektes this an that (that hat einen anderen Wert ... WARUM NUR??)
		this.options.buttons = [
			{
				text: "Schliessen",
				click: function() {						// click = reagiert auf Benutzerinteraktion
					that.close();						// Fehlerdialog schließen
				}
			}
		];
		this._super();									// Aufruf des übergeordneten jQuery-Widgets (in diesem Fall _create)
	}
}); 