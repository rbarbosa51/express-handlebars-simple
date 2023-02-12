import express from 'express';
import {create} from 'express-handlebars';

const app = express();

const hbs = create({
	helpers: {
		foo() {return 'FOO!';},
		bar() {return 'BAR!';}
	}
});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set('views','./views');

app.get('/', (req,res, next) => {
	res.render('home', {
		layout: false,
		showTitle: true,
		helpers: {
			foo(){return 'foo';}
		}
	});
});

app.listen(3000, () => console.log('Listening port 3000'));
