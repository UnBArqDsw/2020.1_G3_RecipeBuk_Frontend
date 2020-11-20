import { Component, Input, OnInit, ChangeDetectorRef, Inject } from '@angular/core';

@Component({
	selector: 'recipe-card',
	template: `
		<div class="recipe-card card">
			<a href="/receita/{{recipe.recipeid}}" target="_blank">
				<div class="card-image" [ngStyle]="{'background-image': 'url(' + '/assets/no-image.png' + ')'}"></div>
			</a>
			<a href="/receita/{{recipe.recipeid}}" target="_blank">
				<div class="card-info">
					<h2>{{recipe.name}}</h2>
					<div class="row icons">
						<div class="icon column">
							<img class="row" src="assets/clock.svg" />
							<p class="icon-description row">{{recipe.time}} minutos</p>
						</div>
						<div class="icon column">
							<img src="assets/cloche.svg" />
							<p class="icon-description">{{recipe.portions}} porcoes</p>
						</div>
					</div>
				</div>
			</a>
		</div>
	`,
	styles: [`
		.card {
			margin-left: auto;
			margin-right: auto;
			margin-top: 15px;
			width: 28vw;
			height: 10vw;
			background-color: white;
			display: flex;
			flex-direction: row;
			border-radius: 5px;
			transition: 0.5s;
			box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
			text-align: center;
		}

		.card-image {
			width: 10vw;
			height: 10vw;
			background-size: cover;
			background-repeat: no-repeat;
			background-position: center;
			border-top-left-radius: 5px;
			border-bottom-left-radius: 5px;
		}

		.card a {
			color: black;
			text-decoration: none;
		}

		.card:hover {
			transform: scale(1.1, 1.1);
			transform-origin: 50% 50%;
		}

		.recipe-card .card-info {
			width: 18vw;
			height: 100%;
			overflow: hidden;
			background-color: transparent;
		}

		.recipe-card .card-info h2 {
			font-size: 1.8vw;
			line-height: 1.8vw;
			margin: 0;
			padding: 0;
		}
		
		.column {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
		}

		.icons {
			width: 100%;
		}

		.icon img {
			width: 40%;
			margin: 0;
			padding: 0;
		}

		.icon p {
			font-size: 1vw;
		}

		.row {
			display: flex;
		}
	`]
})
export class RecipeCard implements OnInit {
	@Input() recipe : any;
	
	constructor() {}
    
	ngOnInit(): void {}
	
}

@Component({
	selector: 'favorite-card',
	template: `
		<div class="recipe-card card">
			<a href="{{recipe.recipelink}}" target="_blank">
				<div class="card-image" [ngStyle]="{'background-image': 'url(' + recipe.recipeimage + ')'}"></div>
			</a>
			<a href="{{recipe.recipelink}}" target="_blank">
				<div class="card-info">
					<h2>{{recipe.recipetitle}}</h2>
					<div class="third-party">
						<p>Ir para receita externa</p>
					</div>
				</div>
			</a>
		</div>
	`,
	styles: [`
		.card {
			margin-left: auto;
			margin-right: auto;
			margin-top: 15px;
			width: 28vw;
			height: 10vw;
			background-color: white;
			display: flex;
			flex-direction: row;
			border-radius: 5px;
			transition: 0.5s;
			box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
			text-align: center;
		}

		.card-image {
			width: 10vw;
			height: 10vw;
			background-size: cover;
			background-repeat: no-repeat;
			background-position: center;
			border-top-left-radius: 5px;
			border-bottom-left-radius: 5px;
		}

		.card a {
			color: black;
			text-decoration: none;
		}

		.card:hover {
			transform: scale(1.1, 1.1);
			transform-origin: 50% 50%;
		}

		.recipe-card .card-info {
			width: 18vw;
			height: 100%;
			overflow: hidden;
			background-color: transparent;
		}

		.recipe-card .card-info h2 {
			font-size: 1.8vw;
			line-height: 1.8vw;
			margin: 0;
			padding: 0;
		}
		
		.column {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
		}

		.third-party {
			font-size: 1vw;
			border: dashed;
			border-radius: 1em;
			width: 80%;
			margin: auto;
		}

		.row {
			display: flex;
		}
	`]
})
export class FavoriteCard implements OnInit {
	@Input() recipe : any;
	
	constructor() {}
    
	ngOnInit(): void {}
	
}

@Component({
	selector: 'book-card',
	template: `
		<div class="card book-card">
			<a href="/livro/{{book.bookid}}">
				<div class="card-info">
					<h2>{{book.title}}</h2>
				</div>
				
				<div class="card-description">
					<h3>{{book.description}}</h3>
				</div>
			</a>
		</div>
	`,
	styles: [`
		.card:hover {
		transform: scale(1.1, 1.1);
		transform-origin: 50% 50%;
	}

	.book-card .card-info {
		width: 28vw;
		height: 1.8vw;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.book-card .card-info h2 {
		font-size: 1.8vw;
		line-height: 1.8vw;
		border-bottom: 1px #F0F0F0 solid;
	}

	.book-card {
		overflow-y: hidden;
	}

	.card-description h3 {
		font-size: 0.95vw;
		font-family: 'Roboto';
	}

	.card {
		margin-left: auto;
		margin-right: auto;
		margin-top: 15px;
		width: 28vw;
		height: 10vw;
		background-color: white;
		display: flex;
		flex-direction: row;
		border-radius: 5px;
		transition: 0.5s;
		box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	}

	.card-image {
		width: 10vw;
		height: 10vw;
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;
		border-top-left-radius: 5px;
		border-bottom-left-radius: 5px;
	}
	
	.card a {
		color: black;
		text-decoration: none;
	}
	`]
})
export class BookCard implements OnInit {
	@Input() book : any;
	
	constructor() {}
    
	ngOnInit(): void {}
	
}