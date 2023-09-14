export default class GA4 {
	constructor() {
	}

	async initScript(trackingId) {
		return new Promise((resolve, reject) => {
			try{
				(function(d, script) {
					script = d.createElement('script');
					script.type = 'text/javascript';
					script.async = true;
					script.onload = function(){
						// remote script has loaded
						window.dataLayer = window.dataLayer || [];
						function gtag(){
							dataLayer.push(arguments);
						}
						gtag('js', new Date());
						gtag("config", trackingId);
						window.gtag = gtag;
						resolve()
					};
					script.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
					d.getElementsByTagName('head')[0].appendChild(script);
				}(document));
			} catch (e) {
				reject(e)
			}
		});
	}

	async getGA(trackingId) {
		if(!trackingId){
			throw "trackingId.is.required";
		}
		if(typeof gtag !== "function") {
			console.log("GA4 is not initialized, initializing now...");
			await this.initScript(trackingId);
		}
		return gtag;
	}
}