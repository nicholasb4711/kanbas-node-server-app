import Database from "../Database/index.js";

function AssignmentRoutes(app) {
    app.get("/api/Assignments/:id", (req, res) => {
        const { id } = req.params;
        const assignment = Database.assignments
          .find((a) => a._id === id);
        if (!assignment) {
          res.status(404).send("Assignment not found");
          return;
        }
        res.send(assignment);
      });
    
    app.put("/api/Assignments/:id", (req, res) => {
        const { id } = req.params;
        const assignment = req.body;
        Database.assignments = Database.assignments.map((a) =>
          a._id === id ? { ...a, ...assignment } : a
        );
        res.sendStatus(204);
      });
    
    app.delete("/api/Assignments/:id", (req, res) => {
        const { id } = req.params;
        Database.assignments = Database.assignments
            .filter((a) => a._id !== id);
        res.sendStatus(204);
    });

    app.post("/api/Assignments", (req, res) => {
        const assignment = {
            ...req.body,
            _id: new Date().getTime().toString()
        };
        Database.assignments.push(assignment);
        res.send(assignment);
    });

    app.get("/api/Assignments", (req, res) => {
        const assignments = Database.assignments;
        res.send(assignments);
    });
}
export default AssignmentRoutes;
