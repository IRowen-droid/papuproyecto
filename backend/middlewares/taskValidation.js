const validateId = (req, res, next) => {
    const { id } = req.params;
    if (!Number.isInteger(Number(id)) || Number(id) <= 0) {
        return res.status(400).json({ error: 'Invalid ID.' });
    }
    next();
};

const validateTaskBody = (req, res, next) => {
    const { title, priority } = req.body;
    if (!title || typeof title !== 'string' || title.trim() === '') {
        return res.status(400).json({ error: 'Title is required.' });
    }
    if (!['Low', 'Medium', 'High'].includes(priority)) {
        return res.status(400).json({ error: 'Priority must be Low, Medium or High.' });
    }
    next();
};

const validateIsCompleted = (req, res, next) => {
    const { isCompleted } = req.body;
    if (typeof isCompleted !== 'boolean') {
        return res.status(400).json({ error: 'isCompleted must be a boolean.' });
    }
    next();
};

module.exports = { validateId, validateTaskBody, validateIsCompleted };
