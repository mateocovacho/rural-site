module.exports = {
  apps: [
    {
      name: 'cartajima-tunnel',
      cwd: '/root/demo-sites/web-cartajima/opencode-version/cartajima-site',
      script: 'pnpm',
      args: 'exec traforo -p 4173 -t cartajima -- pnpm preview -- --host --port 4173',
      env: {
        NODE_ENV: 'development'
      },
      log_file: '/root/demo-sites/web-cartajima/opencode-version/cartajima-site/tunnel.log',
      out_file: '/root/demo-sites/web-cartajima/opencode-version/cartajima-site/tunnel-out.log',
      error_file: '/root/demo-sites/web-cartajima/opencode-version/cartajima-site/tunnel-error.log',
      time: true,
      autorestart: true,
      max_restarts: 10,
      min_uptime: '10s'
    }
  ]
};
