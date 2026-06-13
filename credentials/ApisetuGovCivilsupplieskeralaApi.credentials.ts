import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class ApisetuGovCivilsupplieskeralaApi implements ICredentialType {
        name = 'N8nDevApisetuGovCivilsupplieskeralaApi';

        displayName = 'Apisetu Gov Civilsupplieskerala API';

        icon: Icon = { light: 'file:../nodes/ApisetuGovCivilsupplieskerala/apisetu-gov-civilsupplieskerala.svg', dark: 'file:../nodes/ApisetuGovCivilsupplieskerala/apisetu-gov-civilsupplieskerala.dark.svg' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: 'https://apisetu.gov.in/civilsupplieskerala/v3',
                        required: true,
                        placeholder: 'https://apisetu.gov.in/civilsupplieskerala/v3',
                        description: 'The base URL of your Apisetu Gov Civilsupplieskerala API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                'X-APISETU-APIKEY': '={{$credentials.apiKey}}',
                        },
                },
        };


}
