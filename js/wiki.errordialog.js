//---------------------
// Widget: errorDialog
//---------------------


$.widget("wiki.errorDialog", $.ui.dialog, {
	options: {
		autoOpen: false,								// Dialog nicht automatisch bei instanzierung öffnen
		modal: true										// Objekt soll im Focus/im Vordergrund sein
	},
	
	//-------------
	// open Widget
	//-------------
	open: function(message) {							// Als Parameter wird request.statusText übergeben
//DEBUG
alert("wiki.errordialog.js\n # open: errorDialog");
//DEBUG	
		this.element.find(".message").text(message);	// Suche die HTML class message und über gebe den Fehlercode 
		this._super();
	},
	
	//---------------------
	// create CLOSE Button
	//---------------------
	_create: function() {								// Button konfigurieren
//DEBUG
alert("wiki.errordialog.js\n # _create: Buttons");
//DEBUG	
		var that = this;								// Übergabe des Objektes this an that (that hat einen anderen Wert ... WARUM NUR??)
		this.options.buttons = [
			{
				text: "Schliessen",
				click: function() {						// click = reagiert auf Benutzerinteraktion
//DEBUG
alert("wiki.errordialog.js\n # .close");
//DEBUG	
					that.close();						// Fehlerdialog schließen
				}
			}
		];
		this._super();									// Aufruf des übergeordneten jQuery-Widgets (in diesem Fall _create)
	}
}); 