module.exports = function(api) {
    api.cache(true);

    const presets = ['@babel/preset-env', '@babel/preset-react'];
    const plugins = ['@babel/plugin-proposal-class-properties', 'rewire'];

    if (process.env.NODE_ENV === 'test') {
        plugins.push('@babel/plugin-transform-runtime');
    }

    return {
        presets,
        plugins,
        env: {
            test: {
                plugins: ['@babel/plugin-transform-runtime'],
            },
        },
    };
};
