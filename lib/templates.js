const path = require('path');
const fs = require('fs-extra');
const yaml = require('yaml');

async function loadTemplate(userType) {
  const templatePath = path.join(__dirname, '..', 'examples', 'templates', userType, 'config.yaml');
  
  try {
    const templateContent = await fs.readFile(templatePath, 'utf8');
    return yaml.parse(templateContent);
  } catch (error) {
    // Fallback to inline template if file not found
    return getInlineTemplate(userType);
  }
}

function getInlineTemplate(userType) {
  const templates = {
    founder: {
      name: 'Startup Founder',
      description: 'Automate business metrics, investor updates, and team management',
      skills: [
        'github',
        'notion',
        'slack',
        'trello',
        'analytics'
      ],
      automations: {
        morning_brief: {
          schedule: '8:00 AM daily',
          includes: [
            'revenue_metrics',
            'user_growth',
            'team_updates',
            'competitor_news',
            'calendar_overview'
          ]
        },
        investor_updates: {
          schedule: 'Weekly Friday 4:00 PM',
          includes: [
            'key_metrics',
            'milestones_achieved',
            'challenges_blockers',
            'financial_summary',
            'team_highlights'
          ]
        },
        team_standup_prep: {
          schedule: 'Daily 9:00 AM',
          includes: [
            'yesterday_accomplishments',
            'today_priorities',
            'blocker_identification',
            'team_capacity'
          ]
        }
      },
      workflows: [
        {
          name: 'Revenue Tracking',
          trigger: 'daily',
          actions: ['collect_stripe_data', 'update_dashboard', 'alert_on_anomalies']
        },
        {
          name: 'Competitor Monitoring',
          trigger: 'daily',
          actions: ['scan_competitor_news', 'analyze_product_updates', 'report_insights']
        }
      ]
    },
    
    engineer: {
      name: 'Software Engineer',
      description: 'Automate code reviews, OSS tracking, and technical learning',
      skills: [
        'github',
        'slack',
        'notion',
        'coding-agent',
        'tmux'
      ],
      automations: {
        morning_brief: {
          schedule: '8:00 AM daily',
          includes: [
            'pr_reviews_pending',
            'ci_cd_status',
            'github_notifications',
            'tech_news',
            'learning_progress'
          ]
        },
        code_review_assistant: {
          schedule: 'On PR creation',
          includes: [
            'security_scan',
            'performance_analysis',
            'test_coverage_check',
            'documentation_gaps',
            'best_practice_suggestions'
          ]
        },
        oss_contribution_tracker: {
          schedule: 'Weekly Sunday',
          includes: [
            'contribution_summary',
            'project_health_check',
            'community_engagement',
            'skill_development_areas'
          ]
        }
      },
      workflows: [
        {
          name: 'Automated Code Reviews',
          trigger: 'pr_opened',
          actions: ['analyze_code_quality', 'check_security', 'suggest_improvements']
        },
        {
          name: 'Tech Learning Path',
          trigger: 'weekly',
          actions: ['assess_skill_gaps', 'recommend_resources', 'track_progress']
        }
      ]
    },
    
    creator: {
      name: 'Content Creator',
      description: 'Automate content scheduling, analytics tracking, and trend research',
      skills: [
        'notion',
        'analytics',
        'social-media-manager',
        'content-scheduler'
      ],
      automations: {
        morning_brief: {
          schedule: '8:00 AM daily',
          includes: [
            'engagement_metrics',
            'trending_topics',
            'content_performance',
            'posting_schedule',
            'collaboration_opportunities'
          ]
        },
        content_scheduler: {
          schedule: 'Daily',
          includes: [
            'optimal_posting_times',
            'cross_platform_coordination',
            'hashtag_optimization',
            'audience_engagement_tracking'
          ]
        },
        analytics_report: {
          schedule: 'Weekly Monday',
          includes: [
            'growth_metrics',
            'top_performing_content',
            'audience_insights',
            'competitor_analysis',
            'strategy_recommendations'
          ]
        }
      },
      workflows: [
        {
          name: 'Content Pipeline',
          trigger: 'daily',
          actions: ['research_trends', 'schedule_posts', 'optimize_timing']
        },
        {
          name: 'Engagement Tracking',
          trigger: 'hourly',
          actions: ['monitor_mentions', 'track_engagement', 'respond_to_comments']
        }
      ]
    },
    
    student: {
      name: 'Student/Researcher',
      description: 'Organize research, track deadlines, and optimize study schedules',
      skills: [
        'notion',
        'calendar',
        'research-assistant',
        'citation-manager'
      ],
      automations: {
        morning_brief: {
          schedule: '8:00 AM daily',
          includes: [
            'assignment_deadlines',
            'study_schedule',
            'research_progress',
            'academic_opportunities',
            'calendar_overview'
          ]
        },
        deadline_tracker: {
          schedule: 'Daily',
          includes: [
            'upcoming_deadlines',
            'time_allocation',
            'priority_assessment',
            'progress_tracking'
          ]
        },
        research_assistant: {
          schedule: 'On demand',
          includes: [
            'paper_summarization',
            'citation_management',
            'reference_organization',
            'literature_review_updates'
          ]
        }
      },
      workflows: [
        {
          name: 'Study Optimization',
          trigger: 'weekly',
          actions: ['analyze_performance', 'optimize_schedule', 'recommend_techniques']
        },
        {
          name: 'Research Pipeline',
          trigger: 'daily',
          actions: ['scan_new_papers', 'update_bibliography', 'track_citations']
        }
      ]
    }
  };

  return templates[userType] || templates.founder;
}

module.exports = { loadTemplate, getInlineTemplate };