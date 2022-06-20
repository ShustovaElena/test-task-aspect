export const CONTENT = [
	{
		type: 'panel',
		props: {
			width: 500,
			height: 200,
			visible: true
		},
        content: [
            {
            type: 'panel',
		    props: {
			width: 200,
			height: 100,
			visible: true
        }},
    ]

	},
	{
		type: 'label',
		props: {
			caption: 'test',
			visible: true
		},
	},
	{
		type: 'button',
		props: {
            caption: 'test',
			width: 100,
			height: 50,
			visible: true
		},
	}
]