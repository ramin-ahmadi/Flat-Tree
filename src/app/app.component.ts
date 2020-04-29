import { Component, ViewChild, OnInit } from '@angular/core';
import { SearchService } from './services/search.service';
import { SearchResponse } from './data-model/search.model';
import { Tree } from './data-model/tree.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @ViewChild('tree', { static: false }) tree;
  public nodeCounter: number = 0;
  public treeNodes: Tree[] = [];
  public selectedNode: Tree;

  constructor(private readonly searchService: SearchService)
  {}

  ngOnInit(): void {
    this.searchService
    .getAllSearch()
    .subscribe((searchResponse) => {
      this.setTree(searchResponse);
    });
  }

  public setTree(_searchResponses: SearchResponse[]):void{
		let treeSearchResponses: Tree[] = [];
		_searchResponses.map((searchResponse) => {
				let treeNode:Tree = new Tree();
				treeNode.id = searchResponse.id;
				treeNode.parentId = searchResponse.parentMenuId;
				treeNode.name = searchResponse.title;
				treeNode.isExpanded = true;
				this.nodeCounter++;
				treeSearchResponses.push(treeNode)
		});

		const nest = (items, id = null, link = 'parentId') =>
		  items
			.filter(item => item[link] === id)
			.map(item => ({ ...item, children: nest(items, item.id) }));

		this.treeNodes =  nest(treeSearchResponses);
  }

  public onNodeSelected(node: Tree):void{
    this.selectedNode = node;
  }
}
