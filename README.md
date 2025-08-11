# ClanForge 🏆

**Complete esports organization management platform** - Automate and manage every aspect of running a clan, tribe, or esports organization.

## 🚀 Features

- **Organization Management** - Multi-team orgs with role-based access control
- **Roster & Contracts** - Player management, contract templates, and e-signatures
- **Scheduling & Calendar** - Team calendars, availability polling, and scrim finder
- **Match Management** - Live match controls, veto tools, and score reporting
- **VOD Analysis** - Upload, transcode, and create clips with annotation tools
- **Analytics & Coaching** - Performance dashboards and training tools
- **Community & Content** - Forums, streaming integration, and social media tools
- **Sponsorship & Finance** - CRM, invoicing, and revenue tracking

## 🏗️ Architecture

- **Frontend**: Next.js + TypeScript + Tailwind CSS
- **Backend**: NestJS + TypeScript + PostgreSQL
- **Real-time**: WebSocket + WebRTC for voice channels
- **Storage**: S3-compatible storage with video transcoding pipeline
- **Integrations**: Discord, Twitch, YouTube, Google Calendar, Stripe

## 🚀 Quick Start

### Prerequisites
- Docker & Docker Compose
- Node.js 18+ 
- Git

### Local Development
```bash
# Clone and setup
git clone <your-repo>
cd clanforge

# Start development environment
./scripts/dev up

# Access the application
# Frontend: http://localhost:3000
# Backend: http://localhost:3001
# Database: localhost:5432
```

### Production Deployment
```bash
# Deploy to cloud
./scripts/deploy.sh
```

## 📁 Project Structure

```
clanforge/
├── apps/
│   ├── web/          # Next.js frontend
│   ├── api/          # NestJS backend
│   └── worker/       # Background job processor
├── packages/
│   ├── ui/           # Shared UI components
│   └── lib/          # Shared utilities
├── infra/            # Infrastructure as code
├── scripts/          # Development & deployment scripts
└── docs/             # Documentation
```

## 🔧 Development

See [README.dev.md](./README.dev.md) for detailed development setup and contribution guidelines.

## 📚 Documentation

- [API Reference](./docs/api.md)
- [User Guide](./docs/user-guide.md)
- [Integration Guide](./docs/integrations.md)

## 🧪 Testing

```bash
# Run all tests
npm run test

# Run specific test suites
npm run test:unit
npm run test:integration
npm run test:e2e
```

## 📄 License

MIT License - see [LICENSE](./LICENSE) for details.

## 🤝 Contributing

We welcome contributions! Please see [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines.

---

**Built with ❤️ for the esports community**
