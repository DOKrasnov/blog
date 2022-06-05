import './main.css';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteIcon from '@mui/icons-material/Delete';

export const Article = ({
	title,
	content,
	linkToArticle,
	user,
	date,
	likePost,
	deletePost,
}) => {

	return (
		<article>
			<div className='title'>
				<a href='{linkToArticle}'>{title}</a>
			</div>

			<div className='content'>
				<p>{content}</p>
			</div>

			<div className='details'>
				<div className='link'>
					<a href='{linkToArticle}'>More...</a>
				</div>
				<div className='user'>{user}</div>
				<div className='date'>{date}</div>
			</div>
			<div className='icons'>
				<button onClick = {likePost} >
					<FavoriteIcon />	
				</button> 
				<button onClick= {deletePost} >
					<DeleteIcon />	
				</button>

			</div>
			<hr />
		</article>
	);
}

