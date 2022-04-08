const Links = ({ linksArr }) => {
  return (<div>
    <ul>{linksArr.map(link => {
      return <li>{link}</li>;
    })}</ul>
  </div>);
};

export default Links;