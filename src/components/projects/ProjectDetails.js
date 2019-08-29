import React from "react";

const ProjectDetails = props => {
  const { id } = props.match.params;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            esse ipsum praesentium tenetur, eos quia, fuga qui sed aliquid
            tempora nulla nostrum saepe quibusdam ipsa perspiciatis vitae, quo
            itaque quis.
          </p>
          <div className="card-action grey lighten-4 grey-text">
            <div>Posted by The Net Ninja</div>
            <div>29 Aug, 1pm</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
