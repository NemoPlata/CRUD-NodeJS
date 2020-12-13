const controller = {};

controller.list = (req, res) => {
	req.getConnection((err, conn) => {
		conn.query('SELECT * FROM empleado', (err, empleados) => {
			if (err) {
				res.json(err);
			}
			console.log(empleados);
			res.render('index', {
				data: empleados
			});
		});
	});
};

controller.create = (req, res) => {
	const data = req.body;
	req.getConnection((err, conn) => {
		conn.query('INSERT INTO empleado set ?', [data], (err, rows) => {
			if (err) {
				res.json(err);
			}
			console.log(rows);
			res.redirect('/');
		});
	});	
};

controller.edit = (req, res) => {
	const { id } = req.params; 
	req.getConnection((err, conn) => {
		conn.query('SELECT * FROM empleado WHERE id = ?', [id], (err, rows) => {
			if (err) {
				res.json(err);
			}
			res.render('editarEmpleado', {
				data: rows[0]
			});
		});
	});
};

controller.update = (req, res) => {
	const { id } = req.params; 
	const nuevoEmpleado = req.body;
	req.getConnection((err, conn) => {
		conn.query('UPDATE empleado SET ? WHERE id = ?', [nuevoEmpleado, id], (err, rows) => {
			if (err) {
				res.json(err);
			}
			res.redirect('/');
		});
	});
};

controller.delete = (req, res) => {
	console.log(req.params);
	const { id } = req.params;
	req.getConnection((err, conn) => {
		conn.query('DELETE FROM empleado WHERE id = ?', [id], (err, rows) => {
			if (err) {
				res.json(err);
			}
			res.redirect('/');
		});	
	});		
};

module.exports = controller;