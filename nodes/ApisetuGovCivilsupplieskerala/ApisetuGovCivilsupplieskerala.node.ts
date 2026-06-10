import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { apIsDescription } from './resources/ap-is';

export class ApisetuGovCivilsupplieskerala implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Apisetu Gov Civilsupplieskerala',
		name: 'N8nDevApisetuGovCivilsupplieskerala',
		icon: { light: 'file:./apisetu-gov-civilsupplieskerala.svg', dark: 'file:./apisetu-gov-civilsupplieskerala.dark.svg' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: 'Kerala Civil Supplies Department issues ration cards under Food, Civil Supplies and Consumer Affairs.',
		defaults: { name: 'Apisetu Gov Civilsupplieskerala' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'N8nDevApisetuGovCivilsupplieskeralaApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{\$credentials.url}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "AP Is",
					"value": "AP Is",
					"description": ""
				}
			],
			"default": ""
		},
		...apIsDescription
		],
	};
}
