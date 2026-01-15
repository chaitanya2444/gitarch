# System Architecture Agent 🏗️

> **Transform GitHub repositories into comprehensive architecture documentation automatically**

A powerful full-stack application that analyzes GitHub repositories and generates professional PDF architecture reports with AI-enhanced insights, visual diagrams, and detailed technical documentation.

---

## 📑 Table of Contents

- [Overview](#overview)
- [Key Features](#key-features)
- [System Architecture](#system-architecture)
- [Technology Stack](#technology-stack)
- [Getting Started](#getting-started)
- [Usage Guide](#usage-guide)
- [API Documentation](#api-documentation)
- [Generated PDF Report](#generated-pdf-report)
- [Configuration](#configuration)
- [Troubleshooting](#troubleshooting)
- [Deployment](#deployment)
- [Contributing](#contributing)

---

## Overview

**System Architecture Agent** is an intelligent code analysis tool that:

1. **Clones** any GitHub/GitLab repository
2. **Analyzes** the codebase using static analysis + AI
3. **Generates** a professional 13-section PDF report with:
   - Architecture diagrams
   - API documentation
   - Technology stack analysis
   - Component breakdown
   - Database schema
   - Security recommendations
   - Business alignment (with PRD)

### Why Use This?

- 📊 **Instant Documentation**: Generate architecture docs in 30-60 seconds
- 🤖 **AI-Powered**: Leverages Groq (Llama 3.3 70B) for intelligent insights
- 🎨 **Visual Diagrams**: Auto-generated architecture diagrams using Matplotlib
- 📄 **PRD Integration**: Upload Product Requirements Documents for business alignment
- 🔒 **Private Repos**: Supports GitHub tokens for private repository access
- 🚀 **Production Ready**: Rate limiting, error handling, security features

---

## Key Features

### 🔍 **Intelligent Code Analysis**

- **Multi-Framework Support**: React, Vue, Angular, FastAPI, Django, Flask, Express, Spring Boot
- **API Endpoint Detection**: Automatically finds all REST endpoints
- **Component Extraction**: Parses React/Vue/Angular components with props and state
- **Database Schema**: Identifies models, tables, and relationships
- **Tech Stack Detection**: Recognizes 50+ technologies and frameworks

### 📊 **Visual Architecture Diagrams**

- **System Architecture**: 5-column flow (Users → Frontend → API → Services → Database)
- **Layered Data Flow**: Multi-layer architecture with security and CI/CD
- **Sequence Diagrams**: API interaction flows
- **Frontend/Backend Diagrams**: Component and service visualizations
- **Database ER Diagrams**: Entity-relationship mapping

### 📄 **Comprehensive PDF Report (13 Sections)**

1. **Cover Page** - Project name, timestamp, GitHub URL
2. **Table of Contents** - Auto-generated with page numbers
3. **Executive Summary** - High-level overview and key metrics
4. **Project Overview** - Description, purpose, scope
5. **Technology Stack** - Frontend, backend, database, DevOps
6. **System Architecture** - Patterns, complexity, scalability + diagram
7. **Frontend Architecture** - Framework, components, routing + diagram
8. **Backend Architecture** - Services, business logic, API design + diagram
9. **API Documentation** - Endpoint list with methods and schemas
10. **Data Flow** - Request/response flow + layered diagram
11. **Database Schema** - Entities, relationships + ER diagram
12. **Deployment Architecture** - Hosting, CI/CD, environment config
13. **Business Alignment** - PRD feature mapping and gap analysis

### 🎨 **Modern Web Interface**

- **Glassmorphism Design**: Beautiful dark theme with gradients
- **Responsive**: Works on desktop, tablet, and mobile
- **Real-time Feedback**: Loading states, progress indicators
- **Error Handling**: User-friendly error messages
- **File Upload**: Drag-and-drop PRD documents (PDF, DOCX, PPTX, XLSX, TXT)

### 🔒 **Enterprise Features**

- **Rate Limiting**: 3 requests/minute (prevents abuse)
- **Security**: Input validation, file size limits, CORS protection
- **Private Repos**: GitHub token support
- **Document Processing**: Universal reader for 10+ file formats
- **AI Enhancement**: Optional LLM-powered insights
- **Async Operations**: Non-blocking PDF generation

---

## System Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                         USER BROWSER                             │
│  ┌────────────────────────────────────────────────────────┐     │
│  │  Frontend (HTML + CSS + JavaScript)                     │     │
│  │  • Form validation                                      │     │
│  │  • File upload                                          │     │
│  │  • State management                                     │     │
│  └────────────────────────────────────────────────────────┘     │
└────────────────────────┬────────────────────────────────────────┘
                         │ HTTP/REST API
                         ▼
┌─────────────────────────────────────────────────────────────────┐
│                    FASTAPI BACKEND (Python)                      │
│  ┌────────────────────────────────────────────────────────┐     │
│  │  API Layer (main.py)                                    │     │
│  │  • /api/health - Health check                           │     │
│  │  • /api/generate-github-architecture - Main endpoint    │     │
│  │  • /api/download/{filename} - PDF download              │     │
│  └────────────────────────────────────────────────────────┘     │
│                         │                                        │
│  ┌──────────────────────┴──────────────────────────────────┐    │
│  │              SERVICE LAYER                               │    │
│  │  ┌────────────────────────────────────────────────┐     │    │
│  │  │ GitHubAnalyzerService                          │     │    │
│  │  │ • Clone repository                             │     │    │
│  │  │ • Detect tech stack                            │     │    │
│  │  │ • Extract API endpoints                        │     │    │
│  │  │ • Analyze components                           │     │    │
│  │  │ • LLM enhancement (Groq)                       │     │    │
│  │  └────────────────────────────────────────────────┘     │    │
│  │  ┌────────────────────────────────────────────────┐     │    │
│  │  │ GitHubArchitectureService                      │     │    │
│  │  │ • Generate unified architecture                │     │    │
│  │  │ • Calculate complexity score                   │     │    │
│  │  │ • Determine architecture pattern               │     │    │
│  │  │ • Generate recommendations                     │     │    │
│  │  └────────────────────────────────────────────────┘     │    │
│  │  ┌────────────────────────────────────────────────┐     │    │
│  │  │ GitHubPDFService                               │     │    │
│  │  │ • Parse PRD documents                          │     │    │
│  │  │ • Generate 13-section PDF                      │     │    │
│  │  │ • Embed diagrams                               │     │    │
│  │  │ • Create professional report                   │     │    │
│  │  └────────────────────────────────────────────────┘     │    │
│  │  ┌────────────────────────────────────────────────┐     │    │
│  │  │ DiagramGenerators                              │     │    │
│  │  │ • ArchitectureDiagramGenerator                 │     │    │
│  │  │ • LayeredDataFlowGenerator                     │     │    │
│  │  │ • Matplotlib-based visualizations              │     │    │
│  │  └────────────────────────────────────────────────┘     │    │
│  └─────────────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────────┐
│                    EXTERNAL SERVICES                             │
│  • GitHub API (repository access)                                │
│  • Groq API (LLM analysis)                                       │
│  • Hugging Face API (alternative LLM)                            │
└─────────────────────────────────────────────────────────────────┘
```

### Project Structure

```
gitarch-main/
├── backend/
│   ├── main.py                          # FastAPI app & API endpoints
│   ├── config.py                        # Settings & environment config
│   ├── requirements.txt                 # Python dependencies
│   ├── models/
│   │   └── schemas.py                   # Pydantic data models
│   ├── services/
│   │   ├── github_analyzer_service.py   # Repository analysis (1173 lines)
│   │   ├── github_architecture_service.py # Architecture generation (512 lines)
│   │   ├── github_pdf_service.py        # PDF creation (3649 lines)
│   │   ├── diagram_generator.py         # Visual diagrams (644 lines)
│   │   └── layered_diagram_generator.py # Layered diagrams (422 lines)
│   └── generated_pdfs/                  # Output directory
├── frontend/
│   ├── index.html                       # Main UI
│   ├── styles.css                       # Glassmorphism design
│   ├── script.js                        # Frontend logic
│   └── package.json                     # Metadata
├── .env                                 # Environment variables (gitignored)
├── .gitignore
└── README.md
```

---

## Technology Stack

### Frontend

| Technology | Purpose | Version |
|------------|---------|---------|
| **HTML5** | Structure | - |
| **CSS3** | Glassmorphism styling | - |
| **Vanilla JavaScript** | Logic (ES6+) | - |
| **Google Fonts (Inter)** | Typography | - |

### Backend

| Technology | Purpose | Version |
|------------|---------|---------|
| **Python** | Programming language | 3.8+ |
| **FastAPI** | Web framework | 0.104.1 |
| **Uvicorn** | ASGI server | 0.24.0 |
| **Pydantic** | Data validation | 2.5.0 |
| **GitPython** | Git operations | 3.1.40 |
| **python-dotenv** | Environment variables | 1.0.0 |
| **slowapi** | Rate limiting | 0.1.9 |

### PDF & Document Processing

| Library | Purpose | Version |
|---------|---------|---------|
| **ReportLab** | PDF generation | 4.4.3+ |
| **PyPDF2** | PDF text extraction | 3.0.1 |
| **pdfplumber** | Advanced PDF parsing | 0.10.3 |
| **python-docx** | Word documents | 1.1.0 |
| **python-pptx** | PowerPoint | 0.6.23 |
| **openpyxl** | Excel files | 3.1.2 |
| **pandas** | Data processing | 2.1.4 |

### Visualization

| Library | Purpose | Version |
|---------|---------|---------|
| **Matplotlib** | Diagram generation | 3.8.2 |
| **Pillow** | Image processing | 10.1.0 |
| **NumPy** | Numerical operations | 1.25.2 |

### AI/LLM Integration

| Service | Purpose | API Key Required |
|---------|---------|------------------|
| **Groq (Llama 3.3 70B)** | Code analysis enhancement | `GROQ_API_KEY` |
| **Hugging Face** | Alternative LLM | `HUGGINGFACE_API_KEY` |

---

## Getting Started

### Prerequisites

- **Python 3.8+** - [Download](https://www.python.org/downloads/)
- **Git** - [Download](https://git-scm.com/downloads)
- **Modern Browser** - Chrome, Firefox, Edge, Safari
- **GitHub Account** - For accessing repositories
- **(Optional) GitHub Token** - For private repositories

### Installation

1. **Clone or Download the Repository**

   ```bash
   cd c:\Users\rleel\Downloads\gitarch-main\gitarch-main
   ```

2. **Install Backend Dependencies**

   ```bash
   cd backend
   pip install -r requirements.txt
   ```

   This installs:
   - FastAPI, Uvicorn (web server)
   - ReportLab, PyPDF2, pdfplumber (PDF processing)
   - GitPython (Git operations)
   - Matplotlib, Pillow (diagrams)
   - python-docx, python-pptx, openpyxl (document processing)
   - And 15+ other libraries

3. **Configure Environment Variables** (Optional)

   Create a `.env` file in the `backend/` directory:

   ```env
   # AI API Keys (optional - for enhanced analysis)
   GROQ_API_KEY=gsk_xxxxxxxxxxxxxxxxxxxxx
   HUGGINGFACE_API_KEY=hf_xxxxxxxxxxxxxxxxxxxxx
   
   # Server Configuration
   ALLOWED_ORIGINS=http://localhost:3000,http://localhost:8000
   ENVIRONMENT=development
   DEBUG=True
   LOG_LEVEL=INFO
   ```

   > **Note**: The app works without API keys, but AI-enhanced analysis requires them.

### Running the Application

#### Start Backend Server

```bash
cd backend
python main.py
```

**Expected Output:**
```
INFO:     Started server process [12345]
INFO:     Waiting for application startup.
INFO:     Starting System Architecture Agent API...
INFO:     Application startup complete.
INFO:     Uvicorn running on http://127.0.0.1:8000
```

**Verify Backend:**
- Open browser: `http://localhost:8000/api/health`
- Should see: `{"status": "healthy", "service": "System Architecture Agent API"}`

#### Start Frontend

**Option A: Python HTTP Server** (Recommended)

```bash
cd frontend
python -m http.server 3000
```

Then open: `http://localhost:3000`

**Option B: VS Code Live Server**

1. Install "Live Server" extension
2. Right-click `frontend/index.html`
3. Select "Open with Live Server"

**Option C: Direct File Access**

- Double-click `frontend/index.html`
- Note: File upload may not work without a server

---

## Usage Guide

### Step 1: Prepare Your Repository

- **Public Repository**: No token needed
- **Private Repository**: Generate a GitHub token:
  1. Go to [GitHub Settings → Developer Settings → Personal Access Tokens](https://github.com/settings/tokens)
  2. Click "Generate new token (classic)"
  3. Select scopes: `repo` (full control of private repositories)
  4. Copy the token (starts with `ghp_`)

### Step 2: (Optional) Prepare PRD Document

Supported formats:
- **PDF** (.pdf)
- **Word** (.doc, .docx)
- **PowerPoint** (.ppt, .pptx)
- **Excel** (.xls, .xlsx)
- **Text** (.txt, .md, .json, .csv)

Max file size: **10MB**

### Step 3: Generate Architecture Report

1. **Open Frontend**: `http://localhost:3000`

2. **Fill Form**:
   - **GitHub Repository Link** (Required)
     ```
     https://github.com/username/repository
     ```
   - **GitHub Access Token** (Optional - for private repos)
     ```
     ghp_xxxxxxxxxxxxxxxxxxxxx
     ```
   - **PRD Document** (Optional - for business alignment)
     - Click "Choose File" and select your document

3. **Click "Generate Architecture PDF"**

4. **Wait for Processing** (30-60 seconds)
   - Loading spinner appears
   - Backend clones repo
   - Analyzes codebase
   - Generates diagrams
   - Creates PDF

5. **Download PDF**
   - Success message appears
   - Click "Download PDF" button
   - PDF saves to your downloads folder

### Step 4: Review Generated Report

The PDF contains:
- ✅ Cover page with project info
- ✅ Table of contents
- ✅ Executive summary
- ✅ 5 visual architecture diagrams
- ✅ Complete API documentation
- ✅ Technology stack analysis
- ✅ Security recommendations
- ✅ Deployment guidance
- ✅ Business alignment (if PRD provided)

---

## API Documentation

### Base URL

```
http://localhost:8000
```

### Endpoints

#### 1. Health Check

```http
GET /api/health
```

**Response:**
```json
{
  "status": "healthy",
  "service": "System Architecture Agent API",
  "version": "1.0.0",
  "environment": "development",
  "checks": {
    "groq_api_configured": true,
    "huggingface_api_configured": false,
    "pdf_directory_exists": true,
    "disk_space_available": true
  }
}
```

**Rate Limit:** 10 requests/minute

---

#### 2. Generate GitHub Architecture PDF

```http
POST /api/generate-github-architecture
Content-Type: multipart/form-data
```

**Request Body (FormData):**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `github_link` | string | ✅ Yes | GitHub/GitLab repository URL |
| `github_token` | string | ❌ No | Personal access token for private repos |
| `prd_document` | file | ❌ No | PRD file (PDF, DOCX, PPTX, XLSX, TXT) |

**Example (JavaScript):**
```javascript
const formData = new FormData();
formData.append('github_link', 'https://github.com/username/repo');
formData.append('github_token', 'ghp_xxxxxxxxxxxxx');
formData.append('prd_document', fileInput.files[0]);

const response = await fetch('http://localhost:8000/api/generate-github-architecture', {
  method: 'POST',
  body: formData
});
```

**Success Response (200 OK):**
```json
{
  "success": true,
  "message": "GitHub architecture analysis completed successfully. Repository analyzed with 150 files.",
  "pdf_url": "/api/download/architecture_1703123456.pdf",
  "pdf_filename": "architecture_1703123456.pdf",
  "architecture_analysis": {
    "complexity_score": 7,
    "application_type": "Full-Stack Web Application",
    "architecture_pattern": "MVC",
    "scalability_level": "High",
    "technology_maturity": "Modern"
  },
  "analysis_summary": {
    "api_endpoints": 24,
    "components": 45,
    "services": 8,
    "languages": 3,
    "complexity": "7/10",
    "recommendations": 12
  }
}
```

**Error Responses:**

| Status Code | Error | Description |
|-------------|-------|-------------|
| 400 | Bad Request | Invalid GitHub URL or file format |
| 403 | Forbidden | Private repo without valid token |
| 404 | Not Found | Repository doesn't exist |
| 413 | Payload Too Large | PRD file exceeds 10MB |
| 429 | Too Many Requests | Rate limit exceeded (3/min) |
| 500 | Internal Server Error | Analysis or PDF generation failed |

**Rate Limit:** 3 requests/minute

---

#### 3. Download PDF

```http
GET /api/download/{filename}
```

**Parameters:**
- `filename` (path) - PDF filename from generation response

**Example:**
```
GET /api/download/architecture_1703123456.pdf
```

**Response:**
- **Content-Type:** `application/pdf`
- **Body:** PDF file binary data

**Error Response (404):**
```json
{
  "detail": "PDF file not found"
}
```

---

## Generated PDF Report

### Report Sections

| Section | Content | Diagrams |
|---------|---------|----------|
| **1. Cover Page** | Project name, timestamp, GitHub URL | - |
| **2. Table of Contents** | Auto-generated with page numbers | - |
| **3. Executive Summary** | Key metrics, tech stack, complexity score | - |
| **4. Project Overview** | Description, purpose, scope, analysis details | - |
| **5. Technology Stack** | Frontend, backend, database, DevOps tools | - |
| **6. System Architecture** | Architecture pattern, complexity, scalability | ✅ System diagram |
| **7. Frontend Architecture** | Framework, components, routing, state | ✅ Frontend diagram |
| **8. Backend Architecture** | Services, business logic, API design | ✅ Backend diagram |
| **9. API Documentation** | Endpoints with methods, schemas, auth | - |
| **10. Data Flow** | Request/response flow, layer interactions | ✅ Layered flow diagram |
| **11. Database Schema** | Entities, relationships, data models | ✅ ER diagram |
| **12. Deployment** | Hosting, CI/CD, environment config | - |
| **13. Business Alignment** | PRD feature mapping, gap analysis | - |

### Sample Metrics

A typical report for a full-stack app includes:

- **150+ files analyzed**
- **24 API endpoints documented**
- **45 components identified**
- **8 backend services**
- **3 programming languages**
- **12 architecture recommendations**
- **5 visual diagrams**
- **Complexity score: 7/10**

---

## Configuration

### Backend Settings (`backend/config.py`)

```python
class Settings(BaseSettings):
    # API Keys
    groq_api_key: str = ""
    huggingface_api_key: str = ""
    
    # Security
    allowed_origins: str = "http://localhost:3000,http://localhost:8000"
    max_file_size: int = 10 * 1024 * 1024  # 10MB
    
    # Application
    environment: str = "development"
    debug: bool = True
    log_level: str = "INFO"
    
    # Server
    host: str = "127.0.0.1"
    port: int = 8000
```

### Frontend Configuration (`frontend/script.js`)

```javascript
const API_BASE_URL = 'http://localhost:8000';
```

Change this if deploying to production.

### Environment Variables (`.env`)

```env
# AI API Keys (optional)
GROQ_API_KEY=gsk_xxxxxxxxxxxxxxxxxxxxx
HUGGINGFACE_API_KEY=hf_xxxxxxxxxxxxxxxxxxxxx

# CORS Configuration
ALLOWED_ORIGINS=http://localhost:3000,http://localhost:8000,https://yourdomain.com

# Server Configuration
ENVIRONMENT=production
DEBUG=False
LOG_LEVEL=INFO
HOST=0.0.0.0
PORT=8000
```

---

## Troubleshooting

### Backend Issues

#### ❌ Backend won't start

**Error:** `ModuleNotFoundError: No module named 'fastapi'`

**Solution:**
```bash
cd backend
pip install -r requirements.txt
```

---

#### ❌ Port 8000 already in use

**Error:** `OSError: [Errno 48] Address already in use`

**Solution:**
```bash
# Find process using port 8000
lsof -i :8000  # macOS/Linux
netstat -ano | findstr :8000  # Windows

# Kill the process
kill -9 <PID>  # macOS/Linux
taskkill /PID <PID> /F  # Windows

# Or change port in config.py
port: int = 8001
```

---

#### ❌ Python version too old

**Error:** `SyntaxError: invalid syntax`

**Solution:**
```bash
python --version  # Should be 3.8+
# Install Python 3.8+ from python.org
```

---

### Frontend Issues

#### ❌ Cannot connect to backend

**Error in console:** `Failed to fetch`

**Solution:**
1. Verify backend is running: `http://localhost:8000/api/health`
2. Check CORS settings in `backend/main.py`
3. Ensure `API_BASE_URL` in `script.js` is correct
4. Disable browser extensions (ad blockers)

---

#### ❌ File upload not working

**Error:** File input doesn't trigger

**Solution:**
- Use a local server (not direct file access)
- Try Python HTTP server: `python -m http.server 3000`

---

### Repository Analysis Issues

#### ❌ "Repository not found" (404)

**Causes:**
- Typo in GitHub URL
- Repository is private (need token)
- Repository deleted

**Solution:**
- Verify URL in browser
- For private repos, provide GitHub token
- Check repository exists and is accessible

---

#### ❌ "Repository access denied" (403)

**Causes:**
- Private repository without token
- Invalid/expired token
- Token lacks `repo` scope

**Solution:**
1. Generate new token: [GitHub Settings](https://github.com/settings/tokens)
2. Select `repo` scope
3. Copy and paste token in form

---

#### ❌ "Clone failed" error

**Causes:**
- Network issues
- Large repository (>1GB)
- Git not installed

**Solution:**
```bash
# Verify Git is installed
git --version

# Test manual clone
git clone https://github.com/username/repo
```

---

### PDF Generation Issues

#### ❌ PDF generation fails

**Error:** `PDF generation failed: ...`

**Solution:**
1. Check backend logs for details
2. Verify `generated_pdfs/` directory exists
3. Ensure disk space available
4. Try smaller repository first

---

#### ❌ Diagrams not appearing in PDF

**Causes:**
- Matplotlib not installed
- Font issues
- Memory limitations

**Solution:**
```bash
pip install matplotlib pillow numpy
```

---

#### ❌ PRD file upload fails

**Error:** `File size too large` or `Unsupported file type`

**Solution:**
- Max file size: 10MB
- Supported formats: PDF, DOCX, PPTX, XLSX, TXT, MD, JSON, CSV
- Compress large files before uploading

---

### Performance Issues

#### ❌ Analysis takes too long (>5 minutes)

**Causes:**
- Very large repository (1000+ files)
- Slow network connection
- LLM API timeout

**Solution:**
- Use smaller repositories for testing
- Disable LLM enhancement (remove API keys)
- Increase timeout in `main.py`

---

## Deployment

### Backend Deployment

#### Option 1: Railway

1. Create account at [railway.app](https://railway.app)
2. Connect GitHub repository
3. Add environment variables:
   ```
   GROQ_API_KEY=xxx
   ALLOWED_ORIGINS=https://yourfrontend.com
   ```
4. Deploy automatically

#### Option 2: Render

1. Create account at [render.com](https://render.com)
2. Create new Web Service
3. Connect repository
4. Build command: `pip install -r backend/requirements.txt`
5. Start command: `cd backend && python main.py`

#### Option 3: Heroku

```bash
# Install Heroku CLI
heroku login
heroku create your-app-name

# Add Procfile
echo "web: cd backend && uvicorn main:app --host 0.0.0.0 --port $PORT" > Procfile

# Deploy
git push heroku main
```

### Frontend Deployment

#### Option 1: Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
cd frontend
vercel
```

#### Option 2: Netlify

1. Drag and drop `frontend/` folder to [netlify.com](https://netlify.com)
2. Update `API_BASE_URL` in `script.js` to backend URL

#### Option 3: GitHub Pages

```bash
# Enable GitHub Pages in repository settings
# Point to frontend/ directory
# Update API_BASE_URL to deployed backend
```

### Production Checklist

- [ ] Set `DEBUG=False` in `.env`
- [ ] Configure `ALLOWED_ORIGINS` with actual domains
- [ ] Add API keys to environment variables
- [ ] Enable HTTPS
- [ ] Set up monitoring (e.g., Sentry)
- [ ] Configure rate limiting
- [ ] Set up database for rate limit storage (Redis)
- [ ] Enable logging to file
- [ ] Set up automated backups for generated PDFs

---

## Contributing

Contributions are welcome! Here's how:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**
4. **Test thoroughly**
5. **Commit with descriptive message**
   ```bash
   git commit -m "Add amazing feature"
   ```
6. **Push to your fork**
   ```bash
   git push origin feature/amazing-feature
   ```
7. **Open a Pull Request**

### Development Guidelines

- Follow PEP 8 for Python code
- Use ESLint for JavaScript
- Add docstrings to all functions
- Write unit tests for new features
- Update README with new features

---

## License

This project is provided **as-is** for educational and personal use.

---

## Acknowledgments

- **FastAPI** - Modern Python web framework
- **ReportLab** - Professional PDF generation
- **Matplotlib** - Data visualization
- **GitPython** - Git repository management
- **Groq** - AI-powered code analysis
- **Hugging Face** - Alternative LLM provider

---

## Support

- **Issues**: [GitHub Issues](https://github.com/yourusername/gitarch/issues)
- **Discussions**: [GitHub Discussions](https://github.com/yourusername/gitarch/discussions)
- **Email**: your.email@example.com

---

## Roadmap

- [ ] Support for more frameworks (Ruby on Rails, Laravel, .NET)
- [ ] Real-time analysis progress updates
- [ ] PDF customization options (themes, sections)
- [ ] Multi-repository comparison
- [ ] API versioning support
- [ ] GraphQL endpoint detection
- [ ] Microservices architecture detection
- [ ] Docker/Kubernetes configuration analysis
- [ ] Security vulnerability scanning
- [ ] Code quality metrics (cyclomatic complexity, test coverage)

---

**Made with ❤️ by the System Architecture Agent Team**
