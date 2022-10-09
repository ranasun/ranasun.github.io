import Screenshot from './Screenshot';
import Anchor from './Anchor';
import Tag from './Tag';

interface Props {
	title: string;
	description: string;
	tags: string[];
	url: string;
	imgUrl: string;
}
const Project: React.FC<Props> = ({
	title,
	description,
	tags,
	url,
	imgUrl,
}) => {
	return (
		<div className="w-full my-4 flex gap-4 flex-col md:flex-row-reverse py-4">
			<div className="w-full md:w-2/5 h-full">
				<Screenshot title={title} imgUrl={imgUrl} />
			</div>

			<div className="w-full md:w-3/5">
				<h3 className="text-lg font-bold">{title}</h3>
				<div className="text-lg">
					{description}
					<div className="flex flex-wrap gap-1 mt-4">
						{tags.map((tag) => (
							<Tag key={tag}>{tag}</Tag>
						))}
					</div>
				</div>
				<div className="mt-4 flex gap-2 items-start flex-col-reverse justify-between md:flex-row md:items-end">
					<Anchor url={url}>View website &rarr;</Anchor>
				</div>
			</div>
		</div>
	);
};

export default Project;