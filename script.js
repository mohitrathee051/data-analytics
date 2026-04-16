let allQuestions = [
  {
    "question": "Data analytics is best defined as:",
    "options": [
      "Collection of large volumes of data",
      "Storage of structured and unstructured data",
      "Scientific process of transforming data into insights for decision-making",
      "Visualization of data using graphs"
    ],
    "answer": 2
  },
  {
    "question": "Which of the following represents the correct order of data analytics types based on workflow?",
    "options": [
      "Predictive Descriptive Prescriptive Diagnostic",
      "Descriptive Diagnostic Predictive Prescriptive",
      "Diagnostic Descriptive Prescriptive Predictive",
      "Descriptive Predictive Diagnostic Prescriptive"
    ],
    "answer": 1
  },
  {
    "question": "Under which level of measurement does the variable \"height of a person\" fall?",
    "options": [
      "Nominal",
      "Ordinal",
      "Interval",
      "Ratio"
    ],
    "answer": 3
  },
  {
    "question": "In Python (Pandas), which command is used to select rows by integer position?",
    "options": [
      "df.loc",
      "df.select()",
      "df.iloc[]",
      "df.index"
    ],
    "answer": 2
  },
  {
    "question": "Which of the following is NOT a benefit of using Jupyter Notebook?",
    "options": [
      "Easy documentation",
      "User-friendly interface",
      "Faster hardware execution",
      "Web-based code editing"
    ],
    "answer": 2
  },
  {
    "question": "The arithmetic mean is NOT appropriate for which type of data?",
    "options": [
      "Interval",
      "Ratio",
      "Ordinal",
      "Nominal"
    ],
    "answer": 3
  },
  {
    "question": "If a distribution is positively skewed, which relationship holds true?",
    "options": [
      "Mean < Median < Mode",
      "Mode < Median < Mean",
      "Mean = Median = Mode",
      "Median < Mean < Mode"
    ],
    "answer": 1
  },
  {
    "question": "Which measure is used to compare relative dispersion between two datasets?",
    "options": [
      "Variance",
      "Standard deviation",
      "Range",
      "Coefficient of variation"
    ],
    "answer": 3
  },
  {
    "question": "A dataset has a mean of 50 and a standard deviation of 10. According to the Empirical Rule, approximately what percentage of observations lie between 30 and 70?",
    "options": [
      "68%",
      "75%",
      "95%",
      "99.7%"
    ],
    "answer": 2
  },
  {
    "question": "Consider the following Python code:\n x = [10, 20, 30]\n y=x\n y.append(40)\n print(len(x))\n What will be the output?",
    "options": [
      "3",
      "4",
      "Error",
      "1"
    ],
    "answer": 1
  },
  {
    "question": "Which distribution is most appropriate for rare events occurring over a fixed interval?",
    "options": [
      "Binomial",
      "Normal",
      "Poisson",
      "Uniform"
    ],
    "answer": 2
  },
  {
    "question": "A fair coin is tossed twice. What is the probability of getting exactly one head?",
    "options": [
      "0.25",
      "0.5",
      "0.75",
      "1.0"
    ],
    "answer": 1
  },
  {
    "question": "Which distribution is commonly used to model the time between events in a Poisson process?",
    "options": [
      "Binomial distribution",
      "Exponential distribution",
      "Uniform distribution",
      "Chi-square distribution"
    ],
    "answer": 1
  },
  {
    "question": "Which of the following is a discrete probability distribution?",
    "options": [
      "Normal distribution",
      "Poisson distribution",
      "Exponential distribution",
      "Gamma distribution"
    ],
    "answer": 1
  },
  {
    "question": "If a binomial distribution has n=10 and p=0.4 what is the mean?",
    "options": [
      "2.0",
      "4.0",
      "6.0",
      "10.0"
    ],
    "answer": 1
  },
  {
    "question": "In a hypergeometric distribution, sampling is done:",
    "options": [
      "Without replacement",
      "With replacement",
      "With constant probability",
      "From infinite population"
    ],
    "answer": 0
  },
  {
    "question": "What will be the output of the following code:\n from scipy.stats import poisson\n print (poisson.var(4))",
    "options": [
      "2.0",
      "4.0",
      "8.0",
      "16.0"
    ],
    "answer": 1
  },
  {
    "question": "The mean and variance of a Poisson distribution are:",
    "options": [
      "μ and μ",
      "λ and λ",
      "λ and √λ",
      "λ and λ²"
    ],
    "answer": 1
  },
  {
    "question": "Consider the following Python code:\n from scipy.stats import norm\n print(norm.pdf(0))\n What will be the output?",
    "options": [
      "0.0",
      "0.25",
      "0.399",
      "1.0"
    ],
    "answer": 2
  },
  {
    "question": "Consider the following Python code:\n import scipy.stats as stats\n print(round(stats.norm.cdf(0),2))\n What will be the output?",
    "options": [
      "0.0",
      "0.25",
      "0.5",
      "1.0"
    ],
    "answer": 2
  },
  {
    "question": "Let a population have mean μ=50 and variance σ²=100. For samples of size n=25 the variance of the sampling distribution of the mean is:",
    "options": [
      "100.0",
      "20.0",
      "4.0",
      "25.0"
    ],
    "answer": 2
  },
  {
    "question": "Which statement about Central Limit Theorem is FALSE?",
    "options": [
      "It applies to the sample mean",
      "It requires normal population",
      "Approximation improves as n increases",
      "Sampling distribution tends to normality"
    ],
    "answer": 1
  },
  {
    "question": "If P=0.6 and n=150 what is the standard deviation of the sampling distribution of p?",
    "options": [
      "0.04",
      "0.05",
      "0.06",
      "0.08"
    ],
    "answer": 0
  },
  {
    "question": "A sample of size 36 has mean 80 and population standard deviation 12. The margin of error for a 95% CI is:",
    "options": [
      "2.0",
      "3.92",
      "4.0",
      "6.0"
    ],
    "answer": 1
  },
  {
    "question": "Which estimator is unbiased?",
    "options": [
      "Sample standard deviation",
      "Sample variance",
      "Sample range",
      "Sample median"
    ],
    "answer": 1
  },
  {
    "question": "The width of a confidence interval for the population mean will decrease when:",
    "options": [
      "Confidence level increases",
      "Sample size increases",
      "Population variance increases",
      "Sample mean increases"
    ],
    "answer": 1
  },
  {
    "question": "A 95% CI for a mean is (46.5, 51.5). Which statement is correct?:",
    "options": [
      "The population mean has a 95% probability of lying in the interval",
      "95% of sample means lie in this interval",
      "The CI is constructed so that 95% of such intervals contain μ",
      "The confidence level equals the sample mean"
    ],
    "answer": 2
  },
  {
    "question": "When σ is unknown and sample size is small, the appropriate distribution for CI estimation of μ is:",
    "options": [
      "Z distribution",
      "Chi-square distribution",
      "F distribution",
      "t distribution"
    ],
    "answer": 3
  },
  {
    "question": "A variable is normally distributed with: Mean (μ)=50 Standard deviation (σ)=10. What is the Z-score for a value of 65?",
    "options": [
      "1.0",
      "1.5",
      "2.0",
      "2.5"
    ],
    "answer": 1
  },
  {
    "question": "A sample of size 16 is drawn from a normal population. The chi-square statistic for variance estimation has degrees of freedom equal to:",
    "options": [
      "15.0",
      "16.0",
      "14.0",
      "30.0"
    ],
    "answer": 0
  },
  {
    "question": "Given: x=32, μ=30, σ=10, n=30, α=0.05. Test: H0: μ≤30 vs H1: μ>30. The calculated z-value is closest to:",
    "options": [
      "0.87",
      "1.09",
      "1.64",
      "2.05"
    ],
    "answer": 1
  },
  {
    "question": "For a one-tailed test at α=0.05, if p-value =0.137 the correct decision is:",
    "options": [
      "Reject H0",
      "Accept H0",
      "Do not reject H0",
      "Insufficient data"
    ],
    "answer": 2
  },
  {
    "question": "Rejecting a true null hypothesis is called:",
    "options": [
      "Type II error",
      "Power of the test",
      "Type I error",
      "Sampling error"
    ],
    "answer": 2
  },
  {
    "question": "If the sample size is fixed and α is decreased, then β will:",
    "options": [
      "Decrease",
      "Increase",
      "Remain unchanged",
      "Become zero"
    ],
    "answer": 1
  },
  {
    "question": "A sample of 120 accidents shows 67 due to drunk driving. Test H0: p=0.5 vs H1: p>0.5. The test statistic z is closest to:",
    "options": [
      "0.98",
      "1.15",
      "1.28",
      "1.64"
    ],
    "answer": 2
  },
  {
    "question": "If in a z test, the p-value = 0.2006 and α=0.05, the decision is:",
    "options": [
      "Reject H0",
      "Not enough evidences",
      "Do not reject H0",
      "Increase sample size"
    ],
    "answer": 2
  },
  {
    "question": "If σ1 and σ2 are known, the appropriate test statistic for μ1-μ2 is:",
    "options": [
      "t statistic",
      "chi-square statistic",
      "z statistic",
      "F statistic"
    ],
    "answer": 2
  },
  {
    "question": "Which hypothesis must always contain equality?",
    "options": [
      "Alternative hypothesis",
      "Research hypothesis",
      "Null hypothesis",
      "Working hypothesis"
    ],
    "answer": 2
  },
  {
    "question": "Which action reduces both Type I and Type II errors simultaneously?",
    "options": [
      "Increasing α",
      "Decreasing α",
      "Increasing sample size",
      "Changing tail of test"
    ],
    "answer": 2
  },
  {
    "question": "In the past, 60% of the tourists who visited Delhi went to see Agra City. The management of Agra City recently undertook an extensive promotional campaign. They are interested in determining whether the promotional campaign actually increased the proportion of tourists visiting Agra City. The correct set of hypotheses is:",
    "options": [
      "H0: P>0.60 Ha: P≤0.60",
      "H0: P<0.45 Ha: P≥0.45",
      "H0: P≥0.45 Ha: P<0.45",
      "H0: P≤0.60 Ha: P>0.60"
    ],
    "answer": 3
  },
  {
    "question": "In testing μ=20 vs μ>20 with α=0.05 the rejection region for a Z test is:",
    "options": [
      "Z < -1.96",
      "Z > 1.645",
      "|Z| > 1.96",
      "Z < -1.645"
    ],
    "answer": 1
  },
  {
    "question": "Given values s1²=16, n1=10; s2²=25, n2=15. Degrees of freedom (approx.) is closest to:",
    "options": [
      "18.0",
      "20.0",
      "22.0",
      "24.0"
    ],
    "answer": 2
  },
  {
    "question": "Given that the sample size (n)=36, sample mean =34.6. population standard deviation (σ)=12. H0: μ≤30 vs H1: μ>30. If the test is done at 95% confidence, the null hypothesis should",
    "options": [
      "not be rejected",
      "be rejected",
      "Not enough information",
      "None of these"
    ],
    "answer": 1
  },
  {
    "question": "Which test is appropriate? σ unknown, n=45 normal population",
    "options": [
      "Z-test using σ (Population Standard Deviation)",
      "Z-test using s (Sample Standard Deviation)",
      "t-test",
      "F-test"
    ],
    "answer": 1
  },
  {
    "question": "ANOVA is preferred over multiple t-tests because it",
    "options": [
      "Reduces Type II error",
      "Eliminates assumptions",
      "Controls family-wise Type I error",
      "Works only for large samples"
    ],
    "answer": 2
  },
  {
    "question": "In context of ANOVA, if treatment means are far apart relative to within-group variability, F value will be:",
    "options": [
      "Close to 0",
      "Close to 1",
      "Large",
      "Negative"
    ],
    "answer": 2
  },
  {
    "question": "If Tukey's HSD critical difference = 3.5, then two means of 18 and 14:",
    "options": [
      "Not significantly different",
      "Significantly different",
      "Need LSD test",
      "Require larger sample"
    ],
    "answer": 1
  },
  {
    "question": "The partial ANOVA table is given below. Source: Treatments SS: 240, Error SS: 120 df: 12. Total SS: 360. The number of treatments = 4. Find the Mean Square Due to Treatments:",
    "options": [
      "160.0",
      "80.0",
      "120.0",
      "240.0"
    ],
    "answer": 1
  },
  {
    "question": "For the give table in question no 8, the total degrees of freedom is:",
    "options": [
      "12.0",
      "16.0",
      "15.0",
      "360.0"
    ],
    "answer": 2
  },
  {
    "question": "For the data in question 8, The calculated F-statistic is:",
    "options": [
      "4.0",
      "6.0",
      "8.0",
      "12.0"
    ],
    "answer": 2
  },
  {
    "question": "In a two-way ANOVA, if SSA=180, SSB=120, SSAB=60, then SSE equals:",
    "options": [
      "300.0",
      "360.0",
      "420.0",
      "Cannot be determined"
    ],
    "answer": 3
  },
  {
    "question": "Which of the following designs is the only design capable of detecting interaction effects?",
    "options": [
      "One-way ANOVA",
      "Randomized block design",
      "Factorial design",
      "Paired t-test"
    ],
    "answer": 2
  },
  {
    "question": "In Randomized Block Design (RBD), each treatment appears",
    "options": [
      "Once in each block",
      "Randomly multiple times",
      "In only one block",
      "Only in selected blocks"
    ],
    "answer": 0
  },
  {
    "question": "In a Regression: SSR (Sum Square Regression) = 200, Number of Independent variable = 5, SSE (Sum Square Error) = 60, Total no of observation = 16. What is the F-statistic?",
    "options": [
      "3.33",
      "4.25",
      "5.56",
      "6.67"
    ],
    "answer": 3
  },
  {
    "question": "Least squares method minimizes:",
    "options": [
      "Σ|residuals|",
      "Σ(residuals)²",
      "Σ(residuals)",
      "Σ(y)"
    ],
    "answer": 1
  },
  {
    "question": "A general linear model can include transformed predictors. These represent:",
    "options": [
      "Only interaction terms",
      "Only polynomial terms",
      "Any function of original predictors",
      "Dummy variables only"
    ],
    "answer": 2
  },
  {
    "question": "In Randomized Block Design (RBD) the purpose of blocking is to:",
    "options": [
      "Increase within-group variation",
      "Remove nuisance variation",
      "Increase error variance",
      "Increase Type II error"
    ],
    "answer": 1
  },
  {
    "question": "In simple linear regression, the coefficient b(slope) represents:",
    "options": [
      "Average value of Y",
      "Change in Y for a one-unit change in X",
      "Change in X for a one-unit change in Y",
      "Total variation in data"
    ],
    "answer": 1
  },
  {
    "question": "What is the purpose of this following command? tbl = pd.read_excel('C:/Users/Somi/Documents/regr.xlsx')",
    "options": [
      "To read an Excel dataset into a pandas DataFrame",
      "To create a new Excel file",
      "To export regression results to Excel",
      "To convert a DataFrame into a NumPy array"
    ],
    "answer": 0
  },
  {
    "question": "If the 95% confidence interval for β1 does not include 0, then:",
    "options": [
      "Model is incorrect",
      "Residuals are normal",
      "Slope is statistically significant",
      "Intercept is zero"
    ],
    "answer": 2
  },
  {
    "question": "When regression assumptions about the error term are violated, which of the following may occur?",
    "options": [
      "Coefficient of determination becomes zero",
      "Hypothesis testing results become unreliable",
      "Regression line disappears",
      "Sample size automatically reduces"
    ],
    "answer": 1
  },
  {
    "question": "Residual analysis is primarily used to:",
    "options": [
      "Estimate regression coefficients",
      "Test multicollinearity",
      "Validate regression model assumptions",
      "Maximize R²"
    ],
    "answer": 2
  },
  {
    "question": "If the variance of residuals increases as the value of the independent variable increases, this indicates:",
    "options": [
      "Heteroscedasticity",
      "Autocorrelation",
      "Multicollinearity",
      "Normality"
    ],
    "answer": 0
  },
  {
    "question": "A residual plot showing a clear curved pattern suggests:",
    "options": [
      "The model fits perfectly",
      "Constant variance exists",
      "A linear model may be inappropriate",
      "Errors are normally distributed"
    ],
    "answer": 2
  },
  {
    "question": "Standardized residuals are primarily used to:",
    "options": [
      "Detect outliers",
      "Increase R²",
      "Reduce bias in coefficients",
      "Transform dependent variables"
    ],
    "answer": 0
  },
  {
    "question": "If residuals exhibit non-constant variance, the immediate consequence is:",
    "options": [
      "Biased regression coefficients",
      "Invalid hypothesis tests and confidence intervals",
      "Incorrect sign of slope",
      "Perfect multicollinearity"
    ],
    "answer": 1
  },
  {
    "question": "In a multiple linear regression model, multicollinearity primarily affects:",
    "options": [
      "The unbiasedness of regression coefficients",
      "The magnitude of the dependent variable",
      "The stability and standard errors of coefficient estimates",
      "The calculation of residuals"
    ],
    "answer": 2
  },
  {
    "question": "In multiple regression, the adjusted R² is preferred over R² because it:",
    "options": [
      "Always increases when a new variable is added",
      "Penalizes the inclusion of irrelevant independent variables",
      "Eliminates multicollinearity",
      "Guarantees better prediction accuracy"
    ],
    "answer": 1
  },
  {
    "question": "In a multiple regression model with k independent variables, the overall F-test is used to test whether:",
    "options": [
      "All regression coefficients are individually significant",
      "At least one independent variable is statistically significant",
      "The intercept is equal to zero",
      "Residuals are normally distributed"
    ],
    "answer": 1
  },
  {
    "question": "In a regression model with a dummy variable representing gender (Male=1, Female=0), the coefficient of the dummy variable represents:",
    "options": [
      "The average value of the dependent variable for males",
      "The difference in mean dependent variable between males and females",
      "The slope of the continuous independent variable",
      "The variance of the dependent variable"
    ],
    "answer": 1
  },
  {
    "question": "In regression modeling, the key difference between the dependent variable in linear regression and logistic regression is that",
    "options": [
      "Both require binary dependent variables",
      "Linear regression requires continuous dependent variable while logistic regression requires binary dependent variable",
      "Logistic regression requires continuous dependent variable",
      "Both require normally distributed dependent variables"
    ],
    "answer": 1
  },
  {
    "question": "Which measure is primarily used to assess model fit in logistic regression instead of the sum of squared errors used in linear regression?",
    "options": [
      "Adjusted R²",
      "Mean absolute error",
      "-2 Log Likelihood",
      "Mean squared error"
    ],
    "answer": 2
  },
  {
    "question": "Which statistical test is used to evaluate the overall significance of the logistic regression model?",
    "options": [
      "t test",
      "F test",
      "G test",
      "Z test"
    ],
    "answer": 2
  },
  {
    "question": "The coefficients in logistic regression are interpreted primarily using",
    "options": [
      "standardized beta coefficients",
      "correlation coefficients",
      "variance inflation factors",
      "odds ratios"
    ],
    "answer": 3
  },
  {
    "question": "In logistic regression, the odds ratio for an independent variable measures",
    "options": [
      "change in odds for one-unit increase in predictor",
      "change in probability for one-unit increase",
      "change in mean response",
      "goodness of fit of the model"
    ],
    "answer": 0
  },
  {
    "question": "If the odds of an event occurring are 3, the corresponding probability is",
    "options": [
      "0.5",
      "0.6",
      "0.75",
      "0.8"
    ],
    "answer": 2
  },
  {
    "question": "In logistic regression model evaluation, the difference between the -2 log likelihood of the base model and the proposed model follows approximately which distribution?",
    "options": [
      "chi-square distribution",
      "t distribution",
      "normal distribution",
      "F distribution"
    ],
    "answer": 0
  },
  {
    "question": "The Wald test statistic used in logistic regression for testing significance of coefficients is",
    "options": [
      "β / SE(β)",
      "β² / SE(β)",
      "β̂ / SE(β̂)²",
      "β * SE(β)"
    ],
    "answer": 0
  },
  {
    "question": "In logistic regression, the relationship between predictors and probability is modeled using",
    "options": [
      "linear probability function",
      "exponential function",
      "logistic (sigmoid) function",
      "quadratic function"
    ],
    "answer": 2
  },
  {
    "question": "If the estimated probability of an event is P=0.40, the corresponding odds are",
    "options": [
      "0.4",
      "0.67",
      "1.5",
      "2.5"
    ],
    "answer": 1
  },
  {
    "question": "In a binary classification confusion matrix, which component represents records where the model predicts class '1' but the actual class is '0'?",
    "options": [
      "False Positive",
      "True Positive",
      "False Negative",
      "True Negative"
    ],
    "answer": 0
  },
  {
    "question": "Which of the following correctly defines classification accuracy?",
    "options": [
      "(TP + FP)/Total",
      "(TP+TN)/Total",
      "(FP+FN)/Total",
      "TP/(TP+FN)"
    ],
    "answer": 1
  },
  {
    "question": "Which metric measures the proportion of actual positives correctly identified?",
    "options": [
      "Precision",
      "Recall (Sensitivity)",
      "Specificity",
      "Accuracy"
    ],
    "answer": 1
  },
  {
    "question": "Reducing the cutoff value from 0.50 to 0.30 will generally:",
    "options": [
      "Increase false negatives",
      "Decrease sensitivity",
      "Increase specificity",
      "Increase predicted positives"
    ],
    "answer": 3
  },
  {
    "question": "In an ROC curve, the x-axis represents:",
    "options": [
      "Sensitivity",
      "Precision",
      "False Positive Rate",
      "Accuracy"
    ],
    "answer": 2
  },
  {
    "question": "Which value of AUC (Area Under Curve) represents a perfect classifier?",
    "options": [
      "0.0",
      "0.5",
      "0.75",
      "1.0"
    ],
    "answer": 3
  },
  {
    "question": "Which of the following metrics is most useful when false negatives are very costly (e.g., disease detection)?",
    "options": [
      "Accuracy",
      "Specificity",
      "Sensitivity",
      "Misclassification rate"
    ],
    "answer": 2
  },
  {
    "question": "The first-order regression model with one predictor variable is represented as (Considering the standard nomenclature):",
    "options": [
      "y = β0 + β1x1 + ε",
      "y = β0 + β1x1 + β2x2 + ε",
      "y = β0x1 + β1",
      "y = β1x1² + ε"
    ],
    "answer": 0
  },
  {
    "question": "In a second-order regression model with one predictor variable, which additional term is included (x is independent variable)?",
    "options": [
      "x",
      "x²",
      "y²",
      "xy"
    ],
    "answer": 1
  },
  {
    "question": "In regression analysis, an interaction term between two variables x1 and x2 is represented as:",
    "options": [
      "x1 + x2",
      "x1 - x2",
      "x1x2",
      "x1 / x2"
    ],
    "answer": 2
  },
  {
    "question": "A researcher wants to test whether region (Categorical Variable) and investment type (Categorical variable) are related. Which test is most appropriate?",
    "options": [
      "Chi-square test of independence",
      "t-test",
      "ANOVA",
      "Z-test"
    ],
    "answer": 0
  },
  {
    "question": "Degrees of freedom in a contingency table with 4 rows and 3 columns:",
    "options": [
      "6.0",
      "12.0",
      "5.0",
      "7.0"
    ],
    "answer": 0
  },
  {
    "question": "A Chi-square test shows significance, but several expected frequencies are below 5. What is the most appropriate action?",
    "options": [
      "Ignore the issue",
      "Combine categories",
      "Increase significance level",
      "Use regression"
    ],
    "answer": 1
  },
  {
    "question": "In a contingency table, if row and column variables are independent, then:",
    "options": [
      "Observed = Expected",
      "Observed > Expected",
      "Observed < Expected",
      "Cannot be compared"
    ],
    "answer": 0
  },
  {
    "question": "Which situation violates Chi-square assumptions?",
    "options": [
      "Categorical data",
      "Independent observations",
      "Expected frequency < 5",
      "Large sample size"
    ],
    "answer": 2
  },
  {
    "question": "Cluster analysis may give misleading results when:",
    "options": [
      "Data is standardized",
      "Variables are correlated",
      "Variables are on different scales",
      "Sample size is large"
    ],
    "answer": 2
  },
  {
    "question": "Which method is most sensitive to outliers in clustering?",
    "options": [
      "Hierarchical clustering",
      "K-means clustering",
      "Chi-square test",
      "Regression"
    ],
    "answer": 1
  },
  {
    "question": "A marketer uses clustering to segment customers but finds unstable clusters. The most likely issue is:",
    "options": [
      "Too many observations",
      "Poor variable selection",
      "High significance level",
      "Low degrees of freedom"
    ],
    "answer": 1
  },
  {
    "question": "Which situation best suits cluster analysis?",
    "options": [
      "Predicting sales",
      "Grouping customers based on behavior",
      "Testing independence",
      "Estimating mean"
    ],
    "answer": 1
  },
  {
    "question": "Standardization transforms data so that:",
    "options": [
      "Mean = 0 and deviation = 1",
      "Mean = 1",
      "Variance = 0",
      "Values increase"
    ],
    "answer": 0
  },
  {
    "question": "In cluster analysis, dissimilarity between two objects is:",
    "options": [
      "Always negative",
      "Always zero",
      "Non-negative and increases with difference",
      "Equal to correlation"
    ],
    "answer": 2
  },
  {
    "question": "If all values of a variable are missing, what should be done?",
    "options": [
      "Replace with mean",
      "Ignore missing values",
      "Remove variable",
      "Normalize"
    ],
    "answer": 2
  },
  {
    "question": "Categorical variable dissimilarity is based on:",
    "options": [
      "Ratio of mismatches",
      "Mean difference",
      "Variance",
      "Correlation"
    ],
    "answer": 0
  },
  {
    "question": "If two objects match perfectly in a categorical variable, dissimilarity is:",
    "options": [
      "1.0",
      "0.0",
      "-1",
      "Undefined"
    ],
    "answer": 1
  },
  {
    "question": "Why are ordinal variables standardized to [0,1]?",
    "options": [
      "Increase variance",
      "Reduce sample size",
      "Improve correlation",
      "Different variable scales need normalization"
    ],
    "answer": 3
  },
  {
    "question": "If max = 3.08 and min = 1.34, normalization denominator is:",
    "options": [
      "1.74",
      "2.08",
      "3.08",
      "1.0"
    ],
    "answer": 0
  },
  {
    "question": "The objective function in K-means minimizes:",
    "options": [
      "Between-cluster distance",
      "Sum of squared distances within clusters",
      "Correlation",
      "Variance between clusters"
    ],
    "answer": 1
  },
  {
    "question": "Two objects are described by 4 categorical variables. They match in 3 variables and differ in 1 variable. What is the dissimilarity?",
    "options": [
      "0.25",
      "0.5",
      "0.75",
      "1.0"
    ],
    "answer": 0
  },
  {
    "question": "Given log-transformed values: Object 1 = 2.65, Object 2 = 1.34 Maximum = 3.08, Minimum = 1.34 Find the normalized dissimilarity between objects 1 and 2:",
    "options": [
      "0.5",
      "0.75",
      "1.0",
      "0.25"
    ],
    "answer": 1
  },
  {
    "question": "Consider two centroids: C1 = (1,1), C2 = (5,5) A point P = (2,3). Which cluster will P belong to (using Euclidean distance)?",
    "options": [
      "Cluster 1",
      "Cluster 2",
      "Both equally",
      "Cannot determine"
    ],
    "answer": 0
  },
  {
    "question": "In decision tree algorithm, attribute selection method is used to:",
    "options": [
      "Clean data",
      "Choose best splitting attribute",
      "Remove outliers",
      "Normalize features"
    ],
    "answer": 1
  },
  {
    "question": "CART follows which approach while building trees?",
    "options": [
      "Top-down greedy",
      "Bottom-up greedy",
      "Random search",
      "Backtracking"
    ],
    "answer": 0
  },
  {
    "question": "The Gini index is mainly used for:",
    "options": [
      "Clustering",
      "Classification",
      "Regression only",
      "Sampling"
    ],
    "answer": 1
  },
  {
    "question": "Information gain is biased towards:",
    "options": [
      "Attributes with many values",
      "Attributes with fewer values",
      "Continuous attributes only",
      "Binary attributes only"
    ],
    "answer": 0
  },
  {
    "question": "Gain ratio is used to:",
    "options": [
      "Increase bias",
      "Normalize dataset",
      "Reduce dataset size",
      "Remove bias of information gain"
    ],
    "answer": 3
  },
  {
    "question": "Which of the following ensures binary splits in decision trees?",
    "options": [
      "Information gain",
      "Gain ratio",
      "Gini index",
      "Entropy"
    ],
    "answer": 2
  },
  {
    "question": "In hierarchical clustering, HAC stands for:",
    "options": [
      "Hierarchical Analytical Clustering",
      "Hierarchical Agglomerative Clustering",
      "Hybrid Agglomerative Clustering",
      "High Accuracy Clustering"
    ],
    "answer": 1
  },
  {
    "question": "The Euclidean distance formula is used to:",
    "options": [
      "Measure similarity",
      "Normalize data",
      "Measure dissimilarity",
      "Reduce dimensions"
    ],
    "answer": 2
  },
  {
    "question": "LabelEncoder in Python is used for:",
    "options": [
      "Scaling data",
      "Encoding categorical variables",
      "Feature selection",
      "Data splitting"
    ],
    "answer": 1
  },
  {
    "question": "The function fit_transform() in encoding:",
    "options": [
      "Only fits model",
      "Only transforms data",
      "Fits and transforms data",
      "Deletes missing values"
    ],
    "answer": 2
  }

];

// 🔥 CREATE SETS OF 10
let sets = [];
for (let i = 0; i < allQuestions.length; i += 10) {
  sets.push(allQuestions.slice(i, i + 10));
}

// 🔥 LOAD DROPDOWN
window.addEventListener("load", function () {
  let selector = document.getElementById("setSelector");

  for (let i = 0; i < sets.length; i++) {
    let option = document.createElement("option");
    option.value = i;
    option.text = `Assignment ${i + 1}`;
    selector.appendChild(option);
  }
});

let currentSet = [];
let currentQ = 0;
let score = 0;

// 🎯 ASSIGNMENT QUIZ
function startQuiz() {
  let index = document.getElementById("setSelector").value;
  if (index === "") return;

  currentSet = sets[index];
  currentQ = 0;
  score = 0;

  document.getElementById("score").innerText = score;
  document.getElementById("result").innerText = "";

  loadQuestion();
}

// 🔀 SHUFFLE FUNCTION
function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// 🎯 MOCK TEST
function startMockTest() {
  document.getElementById("setSelector").value = "";

  let shuffled = shuffleArray([...allQuestions]);
  currentSet = shuffled.slice(0, 50);

  currentQ = 0;
  score = 0;

  document.getElementById("score").innerText = score;
  document.getElementById("result").innerText = "Mock Test Started 🚀";

  loadQuestion();
}

// LOAD QUESTION
function loadQuestion() {
  let q = currentSet[currentQ];

  document.getElementById("question").innerText = q.question;

  let html = "";
  q.options.forEach((opt, i) => {
    html += `<div class="option" onclick="checkAnswer(${i})">${opt}</div>`;
  });

  document.getElementById("options").innerHTML = html;
}

// CHECK ANSWER
function checkAnswer(selected) {
  let correct = currentSet[currentQ].answer;
  let options = document.querySelectorAll(".option");

  options.forEach((opt, i) => {
    if (i === correct) opt.style.background = "green";
    else if (i === selected) opt.style.background = "red";

    opt.style.pointerEvents = "none";
  });

  if (selected === correct) {
    score++;
    document.getElementById("result").innerText = "Correct ✅";
  } else {
    document.getElementById("result").innerText = "Wrong ❌";
  }

  document.getElementById("score").innerText = score;
}

// NEXT
function nextQuestion() {
  currentQ++;

  if (currentQ >= currentSet.length) {
    document.getElementById("question").innerText = "Test Finished 🎉";
    document.getElementById("options").innerHTML = "";
    document.getElementById("result").innerText =
      `Final Score: ${score}/${currentSet.length}`;
    return;
  }

  document.getElementById("result").innerText = "";
  loadQuestion();
}