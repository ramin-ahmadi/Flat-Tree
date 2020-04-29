import { SearchResponse } from '../data-model/search.model';


export class SearchDataMock {
    public values: SearchResponse[] = [
		{
			id: 'c56c9daf-2ae4-422f-94b2-4472b9b71e5d',
			title: 'Books',
			url: 'http:rest.your-api-domain/api/c56c9daf-2ae4-422f-94b2-4472b9b71e5d',
			menuId: 'c56c9daf-2ae4-422f-94b2-4472b9b71e5d',
			parentMenuId: null,
		},
		{
			id: 'c56c9daf-2ae4-422f-94b2-4472b9b71e5d-1',
			title: 'Articles',
			url: 'http:rest.your-api-domain/api/c56c9daf-2ae4-422f-94b2-4472b9b71e5d-1',
			menuId: 'c56c9daf-2ae4-422f-94b2-4472b9b71e5d-1',
			parentMenuId: '1d8f0e9b-e187-e911-80e2-000c29dc2aac',
		},
		{
			id: 'c56c9daf-2ae4-422f-94b2-4472b9b71e5d-2',
			title: 'fictions',
			url: 'http:rest.your-api-domain/api/c56c9daf-2ae4-422f-94b2-4472b9b71e5d-2',
			menuId: 'c56c9daf-2ae4-422f-94b2-4472b9b71e5d-2',
			parentMenuId: '1d8f0e9b-e187-e911-80e2-000c29dc2aac',
		},
		{

			id: 'c56c9daf-2ae4-422f-94b2-4472b9b71e5d-3',
			title: 'mystery',
			url: 'http:rest.your-api-domain/api/c56c9daf-2ae4-422f-94b2-4472b9b71e5d-3',
			menuId: 'c56c9daf-2ae4-422f-94b2-4472b9b71e5d-3',
			parentMenuId: 'c56c9daf-2ae4-422f-94b2-4472b9b71e5d-2',
		},
		{

			id: 'c56c9daf-2ae4-422f-94b2-4472b9b71e5d-4',
			title: 'romance',
			url: 'http:rest.your-api-domain/api/c56c9daf-2ae4-422f-94b2-4472b9b71e5d-4',
			menuId: 'c56c9daf-2ae4-422f-94b2-4472b9b71e5d-4',
			parentMenuId: 'c56c9daf-2ae4-422f-94b2-4472b9b71e5d-2',
		},
		{
			id: 'c56c9daf-2ae4-422f-94b2-4472b9b71e5d-5',
			title: 'envelopes',
			url: 'http:rest.your-api-domain/api/c56c9daf-2ae4-422f-94b2-4472b9b71e5d-5',
			menuId: 'c56c9daf-2ae4-422f-94b2-4472b9b71e5d-5',
			parentMenuId: null,
		},
		{
			id: 'c56c9daf-2ae4-422f-94b2-4472b9b71e5d-6',
			title: 'stationery',
			url: 'http:rest.your-api-domain/api/c56c9daf-2ae4-422f-94b2-4472b9b71e5d-6',
			menuId: 'c56c9daf-2ae4-422f-94b2-4472b9b71e5d-6',
			parentMenuId: null,
		},
		{
			id: 'c56c9daf-2ae4-422f-94b2-4472b9b71e5d-7',
			title: 'scissors',
			url: 'http:rest.your-api-domain/api/c56c9daf-2ae4-422f-94b2-4472b9b71e5d-7',
			menuId: 'c56c9daf-2ae4-422f-94b2-4472b9b71e5d-7',
			parentMenuId: 'c56c9daf-2ae4-422f-94b2-4472b9b71e5d-6',
		},
		{
			id: 'c56c9daf-2ae4-422f-94b2-4472b9b71e5d-8',
			title: 'office',
			url: 'http:rest.your-api-domain/api/c56c9daf-2ae4-422f-94b2-4472b9b71e5d-8',
			menuId: 'c56c9daf-2ae4-422f-94b2-4472b9b71e5d-8',
			parentMenuId: null,
		},
		{
			id: 'c56c9daf-2ae4-422f-94b2-4472b9b71e5d-9',
			title: 'specialty paper',
			url: 'http:rest.your-api-domain/api/c56c9daf-2ae4-422f-94b2-4472b9b71e5d-9',
			menuId: 'c56c9daf-2ae4-422f-94b2-4472b9b71e5d-9',
			parentMenuId: 'c56c9daf-2ae4-422f-94b2-4472b9b71e5d-8',
		},
		{
			id: 'c56c9daf-2ae4-422f-94b2-4472b9b71e5d-10',
			title: 'correction pens',
			url: 'http:rest.your-api-domain/api/c56c9daf-2ae4-422f-94b2-4472b9b71e5d-10',
			menuId: 'c56c9daf-2ae4-422f-94b2-4472b9b71e5d-10',
			parentMenuId: 'c56c9daf-2ae4-422f-94b2-4472b9b71e5d-8',
		}
  ];
}
