
export const OrganizationTypeAbbr = {
	container: [ 
		'(.*(?=', 
		').*)' ],

	sl_SL: 'd\.d|d\.o\.o|s\.p|d\.n\.o|k\.d|z\.o\.o',
	en_EN: '{{ common }}',

	common: "plc",
	international: "Ltd\.",

	requiredModifiers: 'i'
}