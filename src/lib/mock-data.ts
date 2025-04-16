import { Post } from '@/models/Post';

export const mockPosts: Post[] = [
  {
    id: 1,
    date: '2023-06-15T10:30:00',
    date_gmt: '2023-06-15T10:30:00',
    guid: {
      rendered: 'https://example.com/?p=1',
    },
    modified: '2023-06-15T10:30:00',
    modified_gmt: '2023-06-15T10:30:00',
    slug: 'getting-started-with-headless-wordpress',
    status: 'publish',
    type: 'post',
    link: 'https://example.com/getting-started-with-headless-wordpress/',
    title: {
      rendered: 'Getting Started with Headless WordPress',
    },
    content: {
      rendered: `
        <h2>What is Headless WordPress?</h2>
        <p>Headless WordPress is a modern approach to content management that separates the backend (content management) from the frontend (content presentation). This architecture allows developers to use WordPress as a content management system while building the frontend with any technology they prefer.</p>
        
        <h2>Benefits of Headless WordPress</h2>
        <ul>
          <li>Improved performance and security</li>
          <li>Better developer experience</li>
          <li>Flexibility in frontend technologies</li>
          <li>Enhanced user experience</li>
        </ul>
        
        <h2>How to Set Up a Headless WordPress Site</h2>
        <p>Setting up a headless WordPress site involves several steps:</p>
        <ol>
          <li>Install and configure WordPress</li>
          <li>Enable the REST API</li>
          <li>Choose a frontend framework (React, Vue, etc.)</li>
          <li>Connect your frontend to the WordPress REST API</li>
        </ol>
        
        <p>By following these steps, you can create a modern, fast, and secure website that leverages the power of WordPress for content management while providing an excellent user experience.</p>
      `,
      protected: false,
    },
    excerpt: {
      rendered:
        '<p>Learn how to set up a headless WordPress site and the benefits of this modern architecture.</p>',
      protected: false,
    },
    author: 1,
    featured_media: 1,
    comment_status: 'open',
    ping_status: 'open',
    sticky: false,
    template: '',
    format: 'standard',
    meta: {
      _wp_page_template: 'default',
      _thumbnail_id: '1',
    },
    _links: {
      self: [{ href: 'https://example.com/wp-json/wp/v2/posts/1' }],
      collection: [{ href: 'https://example.com/wp-json/wp/v2/posts' }],
      about: [{ href: 'https://example.com/wp-json/wp/v2/types/post' }],
      author: [{ embeddable: true, href: 'https://example.com/wp-json/wp/v2/users/1' }],
      replies: [{ embeddable: true, href: 'https://example.com/wp-json/wp/v2/comments?post=1' }],
      'version-history': [
        { count: 1, href: 'https://example.com/wp-json/wp/v2/posts/1/revisions' },
      ],
      'predecessor-version': [{ id: 0, href: '' }],
      'wp:featuredmedia': [{ embeddable: true, href: 'https://example.com/wp-json/wp/v2/media/1' }],
      'wp:attachment': [{ href: 'https://example.com/wp-json/wp/v2/media?parent=1' }],
      'wp:term': [
        {
          taxonomy: 'category',
          embeddable: true,
          href: 'https://example.com/wp-json/wp/v2/categories?post=1',
        },
      ],
      curies: [{ name: 'wp', href: 'https://api.w.org/{rel}', templated: true }],
    },
  },
  {
    id: 2,
    date: '2023-07-22T14:15:00',
    date_gmt: '2023-07-22T14:15:00',
    guid: {
      rendered: 'https://example.com/?p=2',
    },
    modified: '2023-07-22T14:15:00',
    modified_gmt: '2023-07-22T14:15:00',
    slug: 'building-a-nextjs-frontend-for-wordpress',
    status: 'publish',
    type: 'post',
    link: 'https://example.com/building-a-nextjs-frontend-for-wordpress/',
    title: {
      rendered: 'Building a Next.js Frontend for WordPress',
    },
    content: {
      rendered: `
        <h2>Why Next.js for WordPress?</h2>
        <p>Next.js is an excellent choice for building a frontend for a headless WordPress site. It offers server-side rendering, static site generation, and a great developer experience.</p>
        
        <h2>Setting Up a Next.js Project</h2>
        <p>To get started with Next.js for your WordPress site, follow these steps:</p>
        <ol>
          <li>Create a new Next.js project</li>
          <li>Install necessary dependencies</li>
          <li>Set up API routes to fetch WordPress data</li>
          <li>Create components to display your content</li>
        </ol>
        
        <h2>Fetching Data from WordPress</h2>
        <p>Next.js provides several ways to fetch data from your WordPress site:</p>
        <ul>
          <li>Using getStaticProps for static generation</li>
          <li>Using getServerSideProps for server-side rendering</li>
          <li>Using SWR or React Query for client-side data fetching</li>
        </ul>
        
        <p>By leveraging these methods, you can create a fast and SEO-friendly website that displays your WordPress content beautifully.</p>
      `,
      protected: false,
    },
    excerpt: {
      rendered:
        '<p>Learn how to build a modern frontend for your WordPress site using Next.js.</p>',
      protected: false,
    },
    author: 1,
    featured_media: 2,
    comment_status: 'open',
    ping_status: 'open',
    sticky: false,
    template: '',
    format: 'standard',
    meta: {
      _wp_page_template: 'default',
      _thumbnail_id: '2',
    },
    _links: {
      self: [{ href: 'https://example.com/wp-json/wp/v2/posts/2' }],
      collection: [{ href: 'https://example.com/wp-json/wp/v2/posts' }],
      about: [{ href: 'https://example.com/wp-json/wp/v2/types/post' }],
      author: [{ embeddable: true, href: 'https://example.com/wp-json/wp/v2/users/1' }],
      replies: [{ embeddable: true, href: 'https://example.com/wp-json/wp/v2/comments?post=2' }],
      'version-history': [
        { count: 1, href: 'https://example.com/wp-json/wp/v2/posts/2/revisions' },
      ],
      'predecessor-version': [{ id: 0, href: '' }],
      'wp:featuredmedia': [{ embeddable: true, href: 'https://example.com/wp-json/wp/v2/media/2' }],
      'wp:attachment': [{ href: 'https://example.com/wp-json/wp/v2/media?parent=2' }],
      'wp:term': [
        {
          taxonomy: 'category',
          embeddable: true,
          href: 'https://example.com/wp-json/wp/v2/categories?post=2',
        },
      ],
      curies: [{ name: 'wp', href: 'https://api.w.org/{rel}', templated: true }],
    },
  },
  {
    id: 3,
    date: '2023-08-10T09:45:00',
    date_gmt: '2023-08-10T09:45:00',
    guid: {
      rendered: 'https://example.com/?p=3',
    },
    modified: '2023-08-10T09:45:00',
    modified_gmt: '2023-08-10T09:45:00',
    slug: 'optimizing-wordpress-api-performance',
    status: 'publish',
    type: 'post',
    link: 'https://example.com/optimizing-wordpress-api-performance/',
    title: {
      rendered: 'Optimizing WordPress API Performance',
    },
    content: {
      rendered: `
        <h2>The Importance of API Performance</h2>
        <p>When building a headless WordPress site, the performance of your API is crucial. Slow API responses can lead to poor user experience and lower search engine rankings.</p>
        
        <h2>Techniques for Improving API Performance</h2>
        <ul>
          <li>Implement caching strategies</li>
          <li>Optimize database queries</li>
          <li>Use pagination for large datasets</li>
          <li>Minimize payload size</li>
        </ul>
        
        <h2>Caching Strategies</h2>
        <p>Effective caching can significantly improve API performance:</p>
        <ul>
          <li>Server-side caching with Redis or Memcached</li>
          <li>CDN caching for static content</li>
          <li>Browser caching with appropriate headers</li>
        </ul>
        
        <p>By implementing these strategies, you can create a fast and responsive headless WordPress site that provides an excellent user experience.</p>
      `,
      protected: false,
    },
    excerpt: {
      rendered:
        '<p>Learn how to optimize your WordPress API for better performance in a headless architecture.</p>',
      protected: false,
    },
    author: 1,
    featured_media: 3,
    comment_status: 'open',
    ping_status: 'open',
    sticky: false,
    template: '',
    format: 'standard',
    meta: {
      _wp_page_template: 'default',
      _thumbnail_id: '3',
    },
    _links: {
      self: [{ href: 'https://example.com/wp-json/wp/v2/posts/3' }],
      collection: [{ href: 'https://example.com/wp-json/wp/v2/posts' }],
      about: [{ href: 'https://example.com/wp-json/wp/v2/types/post' }],
      author: [{ embeddable: true, href: 'https://example.com/wp-json/wp/v2/users/1' }],
      replies: [{ embeddable: true, href: 'https://example.com/wp-json/wp/v2/comments?post=3' }],
      'version-history': [
        { count: 1, href: 'https://example.com/wp-json/wp/v2/posts/3/revisions' },
      ],
      'predecessor-version': [{ id: 0, href: '' }],
      'wp:featuredmedia': [{ embeddable: true, href: 'https://example.com/wp-json/wp/v2/media/3' }],
      'wp:attachment': [{ href: 'https://example.com/wp-json/wp/v2/media?parent=3' }],
      'wp:term': [
        {
          taxonomy: 'category',
          embeddable: true,
          href: 'https://example.com/wp-json/wp/v2/categories?post=3',
        },
      ],
      curies: [{ name: 'wp', href: 'https://api.w.org/{rel}', templated: true }],
    },
  },
  {
    id: 4,
    date: '2023-09-05T16:20:00',
    date_gmt: '2023-09-05T16:20:00',
    guid: {
      rendered: 'https://example.com/?p=4',
    },
    modified: '2023-09-05T16:20:00',
    modified_gmt: '2023-09-05T16:20:00',
    slug: 'securing-your-headless-wordpress-site',
    status: 'publish',
    type: 'post',
    link: 'https://example.com/securing-your-headless-wordpress-site/',
    title: {
      rendered: 'Securing Your Headless WordPress Site',
    },
    content: {
      rendered: `
        <h2>Security Challenges in Headless WordPress</h2>
        <p>When separating your WordPress backend from your frontend, you introduce new security considerations that need to be addressed.</p>
        
        <h2>Key Security Measures</h2>
        <ul>
          <li>Implement proper authentication</li>
          <li>Use HTTPS for all communications</li>
          <li>Apply rate limiting to prevent abuse</li>
          <li>Keep WordPress and plugins updated</li>
        </ul>
        
        <h2>Authentication Strategies</h2>
        <p>There are several ways to authenticate requests to your WordPress API:</p>
        <ul>
          <li>Application Passwords</li>
          <li>JWT Authentication</li>
          <li>OAuth 2.0</li>
        </ul>
        
        <p>By implementing these security measures, you can protect your headless WordPress site from common vulnerabilities and ensure the safety of your content and users.</p>
      `,
      protected: false,
    },
    excerpt: {
      rendered:
        '<p>Learn how to secure your headless WordPress site and protect it from common vulnerabilities.</p>',
      protected: false,
    },
    author: 1,
    featured_media: 4,
    comment_status: 'open',
    ping_status: 'open',
    sticky: false,
    template: '',
    format: 'standard',
    meta: {
      _wp_page_template: 'default',
      _thumbnail_id: '4',
    },
    _links: {
      self: [{ href: 'https://example.com/wp-json/wp/v2/posts/4' }],
      collection: [{ href: 'https://example.com/wp-json/wp/v2/posts' }],
      about: [{ href: 'https://example.com/wp-json/wp/v2/types/post' }],
      author: [{ embeddable: true, href: 'https://example.com/wp-json/wp/v2/users/1' }],
      replies: [{ embeddable: true, href: 'https://example.com/wp-json/wp/v2/comments?post=4' }],
      'version-history': [
        { count: 1, href: 'https://example.com/wp-json/wp/v2/posts/4/revisions' },
      ],
      'predecessor-version': [{ id: 0, href: '' }],
      'wp:featuredmedia': [{ embeddable: true, href: 'https://example.com/wp-json/wp/v2/media/4' }],
      'wp:attachment': [{ href: 'https://example.com/wp-json/wp/v2/media?parent=4' }],
      'wp:term': [
        {
          taxonomy: 'category',
          embeddable: true,
          href: 'https://example.com/wp-json/wp/v2/categories?post=4',
        },
      ],
      curies: [{ name: 'wp', href: 'https://api.w.org/{rel}', templated: true }],
    },
  },
  {
    id: 5,
    date: '2023-10-12T11:30:00',
    date_gmt: '2023-10-12T11:30:00',
    guid: {
      rendered: 'https://example.com/?p=5',
    },
    modified: '2023-10-12T11:30:00',
    modified_gmt: '2023-10-12T11:30:00',
    slug: 'deploying-your-headless-wordpress-site',
    status: 'publish',
    type: 'post',
    link: 'https://example.com/deploying-your-headless-wordpress-site/',
    title: {
      rendered: 'Deploying Your Headless WordPress Site',
    },
    content: {
      rendered: `
        <h2>Deployment Options for Headless WordPress</h2>
        <p>When it comes to deploying a headless WordPress site, you have several options for both the WordPress backend and the frontend.</p>
        
        <h2>WordPress Backend Deployment</h2>
        <p>For the WordPress backend, consider these hosting options:</p>
        <ul>
          <li>Managed WordPress hosting</li>
          <li>VPS or dedicated server</li>
          <li>Cloud platforms like AWS, Google Cloud, or Azure</li>
        </ul>
        
        <h2>Frontend Deployment</h2>
        <p>For the frontend, you can deploy to:</p>
        <ul>
          <li>Vercel (great for Next.js)</li>
          <li>Netlify</li>
          <li>GitHub Pages</li>
          <li>Traditional web hosting</li>
        </ul>
        
        <h2>CI/CD Pipeline</h2>
        <p>Setting up a continuous integration and deployment pipeline can streamline your development process:</p>
        <ol>
          <li>Set up version control with Git</li>
          <li>Configure automated testing</li>
          <li>Set up automated deployments</li>
          <li>Implement environment-specific configurations</li>
        </ol>
        
        <p>By choosing the right deployment strategy, you can ensure your headless WordPress site is fast, secure, and easy to maintain.</p>
      `,
      protected: false,
    },
    excerpt: {
      rendered:
        '<p>Learn about different deployment options for your headless WordPress site and how to set up a CI/CD pipeline.</p>',
      protected: false,
    },
    author: 1,
    featured_media: 5,
    comment_status: 'open',
    ping_status: 'open',
    sticky: false,
    template: '',
    format: 'standard',
    meta: {
      _wp_page_template: 'default',
      _thumbnail_id: '5',
    },
    _links: {
      self: [{ href: 'https://example.com/wp-json/wp/v2/posts/5' }],
      collection: [{ href: 'https://example.com/wp-json/wp/v2/posts' }],
      about: [{ href: 'https://example.com/wp-json/wp/v2/types/post' }],
      author: [{ embeddable: true, href: 'https://example.com/wp-json/wp/v2/users/1' }],
      replies: [{ embeddable: true, href: 'https://example.com/wp-json/wp/v2/comments?post=5' }],
      'version-history': [
        { count: 1, href: 'https://example.com/wp-json/wp/v2/posts/5/revisions' },
      ],
      'predecessor-version': [{ id: 0, href: '' }],
      'wp:featuredmedia': [{ embeddable: true, href: 'https://example.com/wp-json/wp/v2/media/5' }],
      'wp:attachment': [{ href: 'https://example.com/wp-json/wp/v2/media?parent=5' }],
      'wp:term': [
        {
          taxonomy: 'category',
          embeddable: true,
          href: 'https://example.com/wp-json/wp/v2/categories?post=5',
        },
      ],
      curies: [{ name: 'wp', href: 'https://api.w.org/{rel}', templated: true }],
    },
  },
];

export const totalPosts = 5;
