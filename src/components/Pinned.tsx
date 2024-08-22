import { List, ListItemWithLink } from "../shared/List";

const Pinned = ({ pinned }: any) => {
  const renderPlanets = (pinned: any) => {
    return pinned.pinnedItems.totalCount == 0 ? (
      <p>There is no pinned repo!</p>
    ) : (
      pinned.pinnedItems.edges.map((edge: any) => (
        <ListItemWithLink key={edge.id}>
          <p>ID:{edge.node.id}</p>
          <p>Name:{edge.node.name}</p>
          <p>Description:{edge.node.description}</p>
          <a href={edge.node.url}>
            <p>Link:{edge.node.url}</p>
          </a>
        </ListItemWithLink>
      ))
    );
  };

  return (
    <>{pinned ? <List>{renderPlanets(pinned)}</List> : <div>Not Found</div>}</>
  );
};

export default Pinned;
